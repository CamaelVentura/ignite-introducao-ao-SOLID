import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const requestUser = this.usersRepository.findById(user_id);

    if (!requestUser) {
      throw new Error("User not found!");
    }

    if (!requestUser.admin) {
      throw new Error("User isn't an admin!");
    }

    const allUsers = this.usersRepository.list();

    return allUsers;
  }
}

export { ListAllUsersUseCase };
