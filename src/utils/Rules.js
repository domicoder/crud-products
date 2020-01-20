export default {
  ruleRequired: value => !!value || "Field Required.",
  ruleOnlyNumber: value => /^[0-9]$/.test(value) || "Only numbers accepted.",
  ruleMaxTwoMBInputImages: value =>
    !value || value.size < 2000000 || "Avatar size should be less than 2 MB!"
};
