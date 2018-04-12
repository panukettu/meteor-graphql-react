import Divisions from "./divisions";
import Skills from "../skills/skills";
export default {
	Query: {
		divisions(obj, args, { userId }) {
			return Divisions.find({}).fetch();
		}
	},
	Division: {
		_id: division => division._id,
		name: division => division.name,
    skills: division => Skills.find({ divisionId: division._id }).fetch(),
    completed: division => {
      const skills = Skills.find({
        divisionId: division._id,
        completed: false
      }).fetch();
      return skills.length === 0;
    }
	},
	Mutation: {
		createDivision(obj, { name }, { userId }) {
			const divisionId = Divisions.insert({
				name
			});
			return Divisions.findOne(divisionId);
		},
		deleteDivision(obj, { _id }, { userId }) {
      if(userId) {
        const divisionId = Divisions.remove({ _id });
        return _id;
      }
      throw new Error('Unauthorized action.');
		}
	}
};
