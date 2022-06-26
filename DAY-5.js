
//============================================================================================================
//resume data in JSON format
//===================================================================================================
{ 
    "basics": { 
    "name": "Kirubaharan M", 
    "email": "kirubaharan8878m@gmail.com", 
    "phone": "8489671064", 
    "date of birth": "28-07-1996", 
    "nationality": "INDIAN", 
    "url": "https://kirubaharan.com", 
    "summary": "A summary of Kirubaharan M", 
    "Github url":"https://github.com/KIRUBAHARAN8878M",
    "location": { 
    "address": "Kumaran Nagar",
    "Village" : "Ulkottai", 
    "postalCode": "612905", 
    "city": "Jayankondam",
    "state" :"Tamilnadu", 
    "countryCode": "IND" 
    }, 

    "objective": "A objective of Kirubaharan M", 
    "carrer objective": { 
    "Objective": "to be part of orginatizition where i could enchance myskills for devolpment  of organization and myself " 
    }, 
    "Skills":{
        "keywords": "HTML,CSS,Javascript"
    },
    "education": { 
    "institution": "Veltech engineering college",  
    "area": "chennai", 
    "studyType": "Bachelor", 
    "startyear": "2013", 
    "endyear": "2017", 
    "score": "6.7", 
    "courses": "Bachelor of engineering-Electrical and Electronics Engineering - B.E-EEE" 
     
    }, 

    "12th standard": { 
    "college": "Sri ragavendra matric hr sec school", 
    "area": "veeraganur", 
    "year": "2013", 
    "score": "1013" 
    }, 

    "10th standard": { 
    "school": "Govt hr sec school", 
    "area": "Ulkotti", 
    "year": "2011", 
    "score": "438"
    }, 

    "final year project": { 
    "name": "Improvement of power quality by using Multilevel SATCOM"   
    }, 

    "languages known": { 
    "language1": "English", 
    "fluency1": "Native speaker", 
    "language2": "Tamil", 
    "fluency2": "Native speaker" 
    },

    "interests": { 
    "name": "reading books", 
    "keywords": "Modern India" 
    },

    "declaration": { 
    "declaration": "Kirubaharan M,here by declare that the above info is true to rest of my  knowledge " 
    }
     
    }
}
//===================================================================================================
//===using this .Js file to get resume outpot===
//===================================================================================================
const {readFileSync} = require('fs');
let resume=() =>{
    let b=JSON.parse(readFileSync('r.json'));
    return b;
}
console.log(resume());

//===================================================================================================
//for loops (for, for in, for of, forEach)
//===================================================================================================
const obj = [ { personName : "tom", age: "21", city: "CSK" }, 
              { name: "sara", age: "25", city: "GT" }, 
              { name: "don", age: "27", city: "MI" }, 
            ]; 
for(i=0;i<obj.length;i++){
    console.log(obj[i].name)
    console.log(obj[i].age)
    console.log(obj[i].city)
}

//B)for in->
 for(let i=0;i<obj.length;i++){
for(let kiruba in obj[i]){
     console.log(`${kiruba}: ${obj[i][kiruba]}`);
}
}

//C)for of->
for(let key of obj){

  console.log(key.name)
    console.log(key.age)
    console.log(key.city)  
}

//D)for each->
obj.forEach(function(k){

   console.log(k.name)
    console.log(k.age)
    console.log(k.city)
})