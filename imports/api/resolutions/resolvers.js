import Resolutions from './resolutions';
export default {
  Query: {
      resolutions(obj, args, { userId }) {
          return Resolutions.find({ userId }).fetch()
      }
  },
  Mutation: {
    createResolution(obj, { name }, { userId }) {
        const resolutionId = Resolutions.insert({
            userId,
            name
        });
        return Resolutions.findOne(resolutionId);
    },
    deleteResolution(obj, { _id }, context) {
        const resolutionId = Resolutions.remove({_id});
        return _id;
    }
  }
}