import dotenv from 'dotenv';

dotenv.config();

const configVariables = {
    user: process.env.USER || '',
    password: process.env.PASSWORD || '',
    url: process.env.URL || ''
}

export default configVariables;