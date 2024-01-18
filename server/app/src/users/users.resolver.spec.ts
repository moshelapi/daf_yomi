import { Test, TestingModule } from '@nestjs/testing';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

describe('UsersResolver', () => {
  let resolver: UsersResolver;
  let usersService: UsersService;
  const result = [
    {
      "age": 25,
      "city": "Los Angeles",
      "email": "johndoe@example.com",
      "firstName": "aaaaaaaaaaaaaaaa",
      "id": 4,
      "lastName": "dfb",
      "password": "securePassword123",
      "longitude": -118.243683,
      "latitude": 34.052235,
      "street": "Sunset Boulevard",
      "title": "Mr.",
      "time": "10:00 AM"
    },
    {
      "age": 25,
      "city": "Los Angeles",
      "email": "johndoe@example.com",
      "firstName": "aaaaaaaaaaaaaaaa",
      "id": 5,
      "lastName": "dfb",
      "password": "securePassword123",
      "longitude": -118.243683,
      "latitude": 34.052235,
      "street": "Sunset Boulevard",
      "title": "Mr.",
      "time": "10:00 AM"
    }
  ]
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersResolver,
        {
          provide: UsersService,
          useValue: {
            findAll: jest.fn(),
            findOne: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();
  
    resolver = module.get<UsersResolver>(UsersResolver);
    usersService = module.get<UsersService>(UsersService);
  });
  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {

      jest.spyOn(usersService, 'findAll').mockResolvedValue(result);
      expect(await resolver.findAll()).toBe(result);
    });
  });

  describe('findOne', () => {
    it('should return a single user', async () => {
      const id = 5;
      jest.spyOn(usersService, 'findOne').mockResolvedValue(result[0]);
      expect(await resolver.findOne(id)).toBe(result[0]);
      expect(usersService.findOne).toHaveBeenCalledWith(id);
      expect(usersService.findOne(id)).toBeInstanceOf(Promise< User>);
    });
  });

  describe('createUser', () => {
    it('should create a user', async () => {
      const createUserInput = {
        "age": 25,
        "city": "Los Angeles",
        "email": "johndoe@example.com",
        "firstName": "aaaaaaaaaaaaaaaa",
        "lastName": "dfb",
        "password": "securePassword123",
        "longitude": -118.243683,
        "latitude": 34.052235,
        "street": "Sunset Boulevard",
        "title": "Mr.",
        "time": "10:00 AM",
      }
      jest.spyOn(usersService, 'create').mockResolvedValue( result[1]);
      expect(await resolver.createUser(createUserInput)).toBe(result[1]);
      expect(usersService.create).toHaveBeenCalledWith(createUserInput);
    });
  });

  describe('updateUser', () => {
    it('should update a user', async () => {
      const status = 'updated'; 
      jest.spyOn(usersService, 'update').mockImplementation(async()=>status);
      expect(await resolver.updateUser(result[0])).toBe(status);
      expect(usersService.update).toHaveBeenCalledWith(result[0].id, result[0]);
    });
  });

  describe('removeUser', () => {
    it('should remove a user', async () => {
      const id = 5
      const status = 'deleted'; 
      jest.spyOn(usersService, 'remove').mockImplementation(async()=>status);
      expect(await resolver.removeUser(id)).toBe(status);
      expect(usersService.remove).toHaveBeenCalledWith(id);
    });
  });
});
