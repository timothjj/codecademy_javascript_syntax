/*01*/
class School {
  /*02*/
  constructor(name,level,numberOfStudents) {
    /*3*/
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  /*04*/
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  /*05*/
  set numberOfStudents(value) {
    if (isNaN(value)) {
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    } else {
      this._numberOfStudents = value;
    }
  }
  /*06*/
  quickFacts() {
    console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
  }
  /*07*/
  static pickSubstituteTeacher(substituteTeachers) {
    const subs = Math.floor(Math.random()*substituteTeachers.length);
   return substituteTeachers[subs];}
}
 /*08*/
class PrimarySchool extends School {
  /*09*/
  constructor(name,numberOfStudents,pickupPolicy) {
    /*10*/
    super(name,'primary',numberOfStudents);
    this._level = 'primary';
    /*11*/
    this._pickupPolicy = pickupPolicy;
  }
  /*12*/
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

/*13*/
class HighSchool extends School {
  constructor(name,numberOfStudents,sportsTeams) {
    super(name,'high',numberOfStudents);
    this._level = 'high';
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams() {
    return this._sportsTeams;
  }
}
/*14*/
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
/*15*/ //bug
lorraineHansbury.quickFacts();
/*16*/
const substitute = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
console.log(substitute);
/*17*/
const alSmith = new HighSchool('Al E. Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
/*18*/
console.log(alSmith.sportsTeams)
/*19*/ //end
