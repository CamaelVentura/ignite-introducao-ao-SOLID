import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const databaseUser = this.usersRepository.findById(user_id);

    if (!databaseUser) {
      throw new Error("User not found!");
    }

    const updatedUser = this.usersRepository.turnAdmin(databaseUser);

    return updatedUser;
  }
}

export { TurnUserAdminUseCase };
