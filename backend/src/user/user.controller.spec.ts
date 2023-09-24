import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { createMock } from '@golevelup/ts-jest';

const users = [
  {
    id: '21',
    name: 'John Doe',
    user_name: 'johndoe123',
    password: 'secretpassword',
    email: 'johndoe@example.com',
  },
];

describe('UserController', () => {
  let controller: UserController;
  const users2 = createMock<UpdateUserDto & typeof users>()
  const mockUserService = {
    findAll: jest.fn().mockImplementation(() => Promise.resolve({ users })),
    create: jest.fn().mockImplementation((createUserDto: CreateUserDto) => {
      const newUser = {
        id: '2',
        ...createUserDto,
      };
      users.push(newUser);
      return Promise.resolve(newUser);
    }),
    update: jest
      .fn()
      .mockImplementation((userId: string, updateUserDto: UpdateUserDto) => {
        const updatedUser = {
          id: userId,
          ...updateUserDto,
        };
        const index = users2.findIndex((user) => user.id === userId);
        if (index !== -1) {
          return Promise.resolve(updatedUser);
        } else {
          return Promise.resolve(null);
        }
      }),
    delete: jest.fn().mockImplementation((userId: string) => {
      const index = users.findIndex((user) => user.id === userId);
      users.splice(index, 1);
      if (index !== -1) {
        return Promise.resolve(users[index]);
      } else {
        return Promise.resolve(null);
      }
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    })
      .overrideProvider(UserService)
      .useValue(mockUserService)
      .compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return a users list', async () => {
    expect(await controller.findAll()).toMatchObject({ users });
  });

  it('should create a new user', async () => {
    const newUser = {
      id: '222',
      name: 'Jane mick swagger',
      user_name: 'johndoe123',
      password: 'secretpassword',
      email: 'johndoe@example.com',
      wallet_balance: 1000,
      id_published_content: [1, 2, 3],
      id_bought_content: [4, 5, 6],
    };
    expect(await controller.create(newUser)).toMatchObject({
      id: expect.any(String),
    });
  });

  it('should update a user', async () => {
    const userId = '222';
    const updateUser: UpdateUserDto = { user_name: 'Updated user name', token: 'dzcxasd' };

    const mockReq = {
      user: {
        sub: 'asdasdasd'
      },
      headers: jest.fn(x => x)
    }

    expect(await controller.update(mockReq ,userId, updateUser)).toEqual({
      id: userId,
      user_name: 'Updated user name',
      token: 'dzcxasd'
    });
  });
  it('should delete a user', async () => {
    const userId = '222';

    expect(await controller.delete(userId)).toEqual(undefined);
  });
});
