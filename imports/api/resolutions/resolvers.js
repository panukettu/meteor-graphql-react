import Resolutions from './resolutions';
export default {
  Query: {
      resolutions(obj, args, { userId }) {
          return Resolutions.find({ userId }).fetch()
      }
  },
  Mutation: {
<<<<<<< HEAD
      createResolution(obj, { name }, context) {  
        const ResolutionId = Resolutions.insert({
              name
        });

        return Resolutions.findOne(ResolutionId);
     }
=======
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
>>>>>>> 4ba9ab1c6750aa69eea12ce99859031230d0e049
  }
}