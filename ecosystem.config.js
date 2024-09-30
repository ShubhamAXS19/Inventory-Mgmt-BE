module.exports = {
    apps: [
        {
            name: 'invent-be',
            script: 'npm',
            args: 'run dev',
            env: {
                NODE_ENV: 'development',
                ENV_VAR1: 'environment variable',
            }
        }
    ]
};