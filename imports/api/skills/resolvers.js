import Skills from './skills';
export default {
  Mutation: {
    createSkill(obj, { name, divisionId, info, level, url }) {
      const skillId = Skills.insert({ 
        name,
        divisionId,
        info,
        level,
        url
      });
      return Skills.findOne(skillId);
    }
  }
};
