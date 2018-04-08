import Skills from './skills';
export default {
  Mutation: {
    createSkill(obj, { name, divisionId, info, level, url, completed }) {
      const skillId = Skills.insert({ 
        name,
        divisionId,
        info,
        level,
        url,
        completed
      });
      return Skills.findOne(skillId);
    },
    deleteSkill(obj, { _id }, context) {
      const skillId = Skills.remove({_id});
      return skillId
    },
    toggleSkill(obj, { _id }) {
      console.log(_id);
      const skill = Skills.findOne(_id);
      Skills.update(_id, {
        $set: {
          completed: !skill.completed
        }
      })
      return skill;
    }
  }
};
