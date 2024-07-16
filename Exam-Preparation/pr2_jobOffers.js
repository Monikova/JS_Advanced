class JobOffers {
  jobCandidates = [];
 
  constructor(employer, position) {
    this.employer = employer;
    this.position = position;
  }
 
  jobApplication(candidates) {
    let newCandidateNames = [];
    for (let candidateInfo of candidates) {
      let [name, education, yearsExperience] = candidateInfo.split('-');
      yearsExperience = Number(yearsExperience);
      let candidate = this.jobCandidates.find(c => c.name === name);
      if (candidate) {
        if (yearsExperience > candidate.yearsExperience) {
          this.jobCandidates.map(c => {
           if (c.name === name) {
             c.yearsExperience = yearsExperience;
             return c;
           }
          });
        }
      } else {
        this.jobCandidates.push({name, education, yearsExperience});
      }
      
      if (!newCandidateNames.includes(name)) {
        newCandidateNames.push(name);
      }
    }
    
    return `You successfully added candidates: ${newCandidateNames.join(", ")}.`;
  }
 
 
  jobOffer(chosenPerson) {
    let [name, minimalExperience] = chosenPerson.split('-');
    minimalExperience = Number(minimalExperience);
    let candidate = this.jobCandidates.find(c => c.name === name);
    
    if (!candidate) {
      throw new Error(`${name} is not in the candidates list!`);
    }
    
    if (minimalExperience > candidate.yearsExperience) {
      throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`);
    }
    
    this.jobCandidates.map(c => {
      if (c.name === name) {
        c.yearsExperience = 'hired';
        return c;
      }
    });
    
    return `Welcome aboard, our newest employee is ${name}.`;
  }
 
 
  salaryBonus(name) {
    let candidate = this.jobCandidates.find(c => c.name === name);
 
    if (!candidate) {
      throw new Error(`${name} is not in the candidates list!`);
    }

    if (candidate.education === "Bachelor") {
      return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`;
    } else if (candidate.education === "Master") {
      return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`;
    } else {
      return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`;
    }
  }
 
  candidatesDatabase() {
    if (!this.jobCandidates.length) {
      throw new Error("Candidate Database is empty!");
    }
    
    let message = ["Candidates list:"];
    this.jobCandidates = this.jobCandidates.sort((a, b) => a.name.localeCompare(b.name)).forEach(c => message.push(`${c.name}-${c.yearsExperience}`));
    
    return message.join("\n");
  }
}

// Input 1
// let Jobs = new JobOffers ("Google", "Strategy Analyst");
// console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));

// Input 2
// let Jobs = new JobOffers ("Google", "Strategy Analyst");
// console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
// console.log(Jobs.jobOffer("John Doe-8"));
// console.log(Jobs.jobOffer("Peter Parker-4"));
// console.log(Jobs.jobOffer("John Jones-8"));

// Input 3
let Jobs = new JobOffers ("Google", "Strategy Analyst");
console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
console.log(Jobs.jobOffer("John Doe-8"));
console.log(Jobs.jobOffer("Peter Parker-4"));
console.log(Jobs.salaryBonus("John Doe"));
console.log(Jobs.salaryBonus("Peter Parker"));

// Input 4
// let Jobs = new JobOffers ("Google", "Strategy Analyst");
// console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5","Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
// console.log(Jobs.jobOffer("John Doe-8"));
// console.log(Jobs.jobOffer("Peter Parker-4"));
// console.log(Jobs.jobOffer("Jordan Cole-4"));
// console.log(Jobs.salaryBonus("Jordan Cole"));
// console.log(Jobs.salaryBonus("John Doe"));
// console.log(Jobs.candidatesDatabase()); 
