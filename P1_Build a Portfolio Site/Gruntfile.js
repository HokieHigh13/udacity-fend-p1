/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            name: '360',
            width: '360',
            quality: 100
          },{
            name: '275',
            width: '275',
            quality: 100
          },{
            name: '250',
            width: '250',
            quality: 100
          },{
            name: '225',
            width: '225',
            quality: 100
          },{
            name: '215',
            width: '215',
            quality: 100
          },{
            name: '200',
            width: '200',
            quality: 100
          },{
            name: '175',
            width: '175',
            quality: 100
          },{
            name: '150',
            width: '150',
            quality: 100 
          },{
            name: '125',
            width: '125',
            quality: 100 
          },{
            name: '100',
            width: '100',
            quality: 100 
          },{
            name: '85',
            width: '85',
            quality: 100 
          },{
            name: '75',
            width: '75',
            quality: 100 
          },{
            name: '60',
            width: '60',
            quality: 100 
          },{
            name: '45',
            width: '45',
            quality: 100 
          }]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png,svg}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy: {
      dev: {
        files: [{
          expand: true,
          src: 'images_src/fixed/*.{gif,jpg,png,svg}',
          dest: 'images/'
        }]
      },
    },
  });
  
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);

};
