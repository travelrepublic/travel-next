module.exports = {
    webpack: function(config, {dev}) {

        // config.resolve.extensions = [".tsx",".ts"];
        // config.module.rules.push({
        //     test: /\.tsx?$/,
        //     loader: 'ts-loader',
        //     exclude: /node_modules/,
        // });

        if(dev) {
            return config
        }

        config.resolve.alias = {
            'react' : 'preact-compat/dist/preact-compat',
            'react-dom': 'preact-compat/dist/preact-compat'
        }

        return config;
    }
}