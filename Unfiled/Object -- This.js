const profile = {
  firstName: 'Matt',
  lastName: 'Sylvester',
  yearOfBirth: 2000,
  job: 'Priest',
  currentAge: function (yearOfBirth) {
    return 2018 - this.yearOfBirth;
  },
};

profile.currentAge()