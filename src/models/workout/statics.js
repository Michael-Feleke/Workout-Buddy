export const getAllWorkouts = async () => {
  return this.find().sort({ createdAt: -1 });
};

export const getSingleWorkout = async (id) => {
  return this.findById(id);
};

export const createNewWorkout = async (newWorkout) => {
  return this.create(newWorkout);
};

export const deleteSingleWorkout = async (id) => {
  return this.findByIdAndDelete(id);
};

export const updateWorkout = async (id, updatedWorkout) => {
  return this.findByIdAndUpdate(id, updatedWorkout, { new: true });
};
