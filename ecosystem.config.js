module.exports = {
  apps: [{
    cwd: "/srv",
    name: "frontend",
    script: "npm",
    args: "start",
    env: {
      HOST: '0.0.0.0',
      PORT: 80,
      NODE_TLS_REJECT_UNAUTHORIZED: '0'
    },
    env_dev: {
      HOST: '0.0.0.0',
      PORT: 80
    }
  }]
}
