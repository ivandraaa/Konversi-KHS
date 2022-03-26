var myElement = document.getElementById("button").onclick = function(){
    
    // baris-1
        let inputMatkul1 = document.getElementById("matkul-1");
        let outputMatkul1 = document.getElementById("hasil-matkul1");
        outputMatkul1.innerHTML = inputMatkul1.value;

        let inputSks1 = document.getElementById("sks-1");
        let outputSks1 = document.getElementById("hasil-sks1");
        outputSks1.innerHTML = inputSks1.value;

        let inputAngka1 = document.getElementById("angka-1");
        let outputAngka1 = document.getElementById("hasil-angka1");
        outputAngka1.innerHTML = inputAngka1.value;

    // baris-2
        let inputMatkul2 = document.getElementById("matkul-2");
        let outputMatkul2 = document.getElementById("hasil-matkul2");
        outputMatkul2.innerHTML = inputMatkul2.value;

        let inputSks2 = document.getElementById("sks-2");
        let outputSks2 = document.getElementById("hasil-sks2");
        outputSks2.innerHTML = inputSks2.value;

        let inputAngka2 = document.getElementById("angka-2");
        let outputAngka2 = document.getElementById("hasil-angka2");
        outputAngka2.innerHTML = inputAngka2.value;

    // baris-3
        let inputMatkul3 = document.getElementById("matkul-3");
        let outputMatkul3 = document.getElementById("hasil-matkul3");
        outputMatkul3.innerHTML = inputMatkul3.value;

        let inputSks3 = document.getElementById("sks-3");
        let outputSks3 = document.getElementById("hasil-sks3");
        outputSks3.innerHTML = inputSks3.value;

        let inputAngka3 = document.getElementById("angka-3");
        let outputAngka3 = document.getElementById("hasil-angka3");
        outputAngka3.innerHTML = inputAngka3.value;

    // baris-4
        let inputMatkul4 = document.getElementById("matkul-4");
        let outputMatkul4 = document.getElementById("hasil-matkul4");
        outputMatkul4.innerHTML = inputMatkul4.value;

        let inputSks4 = document.getElementById("sks-4");
        let outputSks4 = document.getElementById("hasil-sks4");
        outputSks4.innerHTML = inputSks4.value;

        let inputAngka4 = document.getElementById("angka-4");
        let outputAngka4 = document.getElementById("hasil-angka4");
        outputAngka4.innerHTML = inputAngka4.value;

    // baris-5
        let inputMatkul5 = document.getElementById("matkul-5");
        let outputMatkul5 = document.getElementById("hasil-matkul5");
        outputMatkul5.innerHTML = inputMatkul5.value;

        let inputSks5 = document.getElementById("sks-5");
        let outputSks5 = document.getElementById("hasil-sks5");
        outputSks5.innerHTML = inputSks5.value;

        let inputAngka5 = document.getElementById("angka-5");
        let outputAngka5 = document.getElementById("hasil-angka5");
        outputAngka5.innerHTML = inputAngka5.value;

    // Hasil IPK
        let out_ip = document.getElementById('ip');
        out_ip.innerHTML = (+inputAngka1.value*inputSks1.value + +inputAngka2.value*inputSks2.value + +inputAngka3.value*inputSks3.value + +inputAngka4.value*inputSks4.value + +inputAngka5.value*inputSks1.value) 
        / (+inputSks1.value + +inputSks2.value + +inputSks3.value + +inputSks4.value + +inputSks5.value);

    
        
        if(inputAngka1.value == 4){
            document.getElementById("huruf1").innerHTML= "A";
        }else if(inputAngka1.value == 3){
            document.getElementById("huruf1").innerHTML="B";
        }else if(inputAngka1.value == 2){
            document.getElementById("huruf1").innerHTML="C";
        }else if(inputAngka1.value == 1){
            document.getElementById("huruf1").innerHTML="D";
        }else if(inputAngka1.value == 0){
            document.getElementById("huruf1").innerHTML="E";
        }          
}