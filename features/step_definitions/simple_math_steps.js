const { Given, When, Then } = require("cucumber");
const assert = require('assert')
const CustomWorld = require('../../lib/customWorld');

let variable;

Given("a variable set to {int}", function(number) {
    variable = new CustomWorld();
    variable.setTo(number);
});

When("I increment the variable by {int}", function(number) {
  variable.incrementBy(number);
});

Then("the variable should contain {int}", function(number) {
    assert.equal(variable.get(),number);
});