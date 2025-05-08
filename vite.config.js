export default {
    preview: {
      host: '0.0.0.0',
      port: process.env.PORT || 4321,
      allowedHosts: [
        'luis-alexander-53ua.onrender.com',
        '*.onrender.com'  // Esto permitirá cualquier subdominio de onrender.com
      ]
    }
  };