import fs from 'fs';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'users.json');

// Ensure DB file exists
function ensureDb() {
    if (!fs.existsSync(DB_PATH)) {
        fs.writeFileSync(DB_PATH, JSON.stringify([], null, 2));
    }
}

export function getAllUsers() {
    ensureDb();
    const data = fs.readFileSync(DB_PATH, 'utf-8');
    return JSON.parse(data);
}

export function findUserByEmail(email: string) {
    const users = getAllUsers();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return users.find((user: any) => user.email === email);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createUser(userData: any) {
    const users = getAllUsers();
    const newUser = {
        id: Math.random().toString(36).substring(2, 15),
        createdAt: new Date().toISOString(),
        ...userData,
    };
    users.push(newUser);
    fs.writeFileSync(DB_PATH, JSON.stringify(users, null, 2));
    return newUser;
}
