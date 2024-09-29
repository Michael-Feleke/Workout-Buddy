export async function getAllWorkouts() {
  return this.find().populate("createdBy", "email").sort({ createdAt: -1 });
}

export async function getSingleWorkout(id) {
  return this.findById(id).populate("createdBy", "email");
}

export async function createNewWorkout(newWorkout) {
  return this.create(newWorkout);
}

export async function deleteSingleWorkout(id) {
  return this.findByIdAndDelete(id);
}

export async function updateWorkout(id, updatedWorkout) {
  return this.findByIdAndUpdate(id, updatedWorkout, { new: true });
}
