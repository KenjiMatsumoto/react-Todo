var webpack = require('webpack');
var path = require('path');
var envFile = require('node-env-file');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

try {
  envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'));
} catch(e) {

}

module.exports = {
  //ビルドの起点となるファイルパスの指定
  //Arrayやobjectでの複数指定が可能
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        API_KEY: JSON.stringify(process.env.API_KEY),
        AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
        DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
        STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET),
        GITHUB_ACCESS_TOKEN: JSON.stringify(process.env.GITHUB_ACCESS_TOKEN)
      }
    })
  ],
  output: {
    //出力先のファイルパスを指定
    path: __dirname,
    //出力ファイル名の設定
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,

    modulesDirectories: ['node_modules', './app/components', './app/api'],
    //aliasの指定
    alias: {
      app: 'app',
      applicationStyles: 'app/style/app.scss',
      actions: 'app/actions/actions.jsx',
      reducers: 'app/reducers/reducers.jsx',
      configureStore: 'app/store/configureStore.jsx'
    },
    //ビルド対象に含めたい(requireしている)ファイルの拡張子を指定します
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        //事前にbabelを利用する場合は、以下のコマンドを実施して別途インストールが必要
        //npm install babel-loader babel-core babel-preset-es2015 babel-preset-react --save-dev
        loader: 'babel-loader',
        //
        query: {
          //loaderに渡したいクエリパラメータを指定します
          presets: ['react', 'es2015', 'stage-0']
        },
        //ビルドの対象ファイルを指定する(正規表現の利用が可能)
        test: /\.jsx?$/,
        //ビルドの除外対象ファイルを指定する(includeの場合はビルドに含むものを指定する)
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ]
  },
  //以下の記述をすることでbundleファイルでの参照ではなく
  //自分で作成したファイルでのdebugが可能となる
  devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map'
};
