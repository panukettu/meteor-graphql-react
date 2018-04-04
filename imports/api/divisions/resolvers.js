import Divisions from './divisions';
import Skills from '../skills/skills'
export default {
  Query: {
      divisions(obj, args, { userId }) {
          return Divisions.find({}).fetch()
      }
  },
  Division : {
    _id: division => division._id,
    name: division => division.name,
    skills: division => Skills.find({ divisionId: division._id}).fetch()
  },
  Mutation: {
    createDivision(obj, { name }, { userId }) {
        const divisionId = Divisions.insert({
            name
        });
        return Divisions.findOne(divisionId);
    },
    deleteDivision(obj, { _id }, context) {
        const divisionId = Divisions.remove({_id});
        return _id;
    }
  }
}