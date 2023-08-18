import { getHttpEndpoint } from "@orbs-network/ton-access";
import { TonClient, Address } from "ton";
import { Cell } from "ton-core";

export function msgToStr(msg: Cell | undefined){
  if (!msg) {
	return
  }
  const body = msg.asSlice()
  if (body.remainingBits < 32) {
	return undefined
  }
  const opcode = body.loadUint(32)
  if (opcode !== 0) {
	return 'OP: 0x' + opcode.toString(16)
  }
  if (body.remainingBits < 8 || body.remainingBits % 8 !== 0) {
	return undefined
  }
  //console.log('body.remainingBits', body.remainingBits)
  return body.loadBuffer(body.remainingBits / 8).toString('utf-8')
}


export async function check() {
    // Config
    const client = new TonClient({
        endpoint: await getHttpEndpoint({network: "testnet"})
    })
	//https://github.com/TrueCarry/timscan/blob/e4f1f8923b27f0ef1a121a0bfaf0e4da9e6b48e8/src/ton/src/client/TonClient.spec.ts#L10
	
	//let txs: TonTransaction[] = [];
	

	let msgs_text: string[] = [];
    // Transfer TX
    
	while(true) {
		try {
		// Tonclient returns 500 6 of 10 - very bad pattern - needed to be updated as soon as possible
			const txData = await client.getTransactions(Address.parse('EQCj2gVRdFS0qOZnUFXdMliONgSANYXfQUDMsjd8fbTW-RuC'), {
				limit: 60,
				hash: "",
				lt: "0"
			})
			
			txData.forEach((trx) => {
				const out_msg = trx?.outMessages.values();
				//console.log(out_msg[0]?.info);
				let text = msgToStr(out_msg[0]?.body)
				//console.log(msgToStr(out_msg[0]?.body));
				if(text) {
					msgs_text.push(text);
				}
			});
			
			
			if(txData.length == 60){
				break; 
			}
		} catch {
			continue; 
		}
	}
	
	const values = ['tonspeedrun','tonspeedrun2','tonspeedrun3'];
	
	const multipleExist = values.every(value => {
	  return msgs_text.includes(value);
	});
	
	return multipleExist
}

