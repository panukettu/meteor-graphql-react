import Skills from './skills';
export default {
  Mutation: {
    createSkill(obj, { name, divisionId, info, level }) {
      const skillId = Skills.insert({ 
        name,
        divisionId,
        info,
        level
      });
      return Skills.findOne(skillId);
    }
  }
};
