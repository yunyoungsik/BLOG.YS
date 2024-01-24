const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// 사용자를 생성하는 함수
async function createUser(name, email, password) {
  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        // 패스워드는 해싱해서 저장해야 합니다. 이 부분은 보안상의 이유로 실제로는 다르게 처리해야 합니다.
        // 예시: password: hashPassword(password)
        password,
      },
    });
    console.log('User created:', newUser);
    return newUser;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}

// 사용 예시
createUser('John Doe', 'john@example.com', 'securepassword');