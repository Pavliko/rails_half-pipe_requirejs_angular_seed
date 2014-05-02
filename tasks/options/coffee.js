module.exports = {
  glob_to_multiple: {
    expand: true,
    cwd: '<%= dirs.tmp %>/prepare/assets/scripts',
    src: ['**/*.coffee'],
    dest: '<%= dirs.tmp %>/prepare/assets/scripts',
    ext: '.js'
  }
};
