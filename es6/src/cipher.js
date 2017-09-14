export class Cipher {

  encrypt(str) { return str;}
  decrypt(str) { return str;}

}

export class CaesarCipher extends Cipher {
	constructor(shift){
		super();
		this.shift = shift;
	}

	encrypt(str) {
		let newstr = str.toLowerCase();
		let enscription = [];
		newstr.forEach(function(t){
			let secret = t.charCodeAt(0);
			if(secret < 123 && secret > 96){
				secret = secret+ this.shift;
			}
			if (secret > 122){
				let difference = secret -122;
				secret = 96 + difference;
			}
			enscription.push(secret);
		});
		return String.fromCharCode(enscription);
	}

}

