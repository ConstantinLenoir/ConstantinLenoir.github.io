#! ./.env/bin/python

import sys
import os
import os.path
import argparse
import subprocess



parser = argparse.ArgumentParser(description = "A program to "
                                 "manage my showcase web application.")


parser.add_argument('commands',
                    type = str,
                    choices = ["hello", "start_server",
                               "stop_server", "compile_rst",
                               "compile_jsx", "pygmentize"],
                    nargs = '+',
                    help = 'The commands to run.')



class Commands:
    
    @staticmethod
    def hello():
        print("Hello!",
              sys.version,
              sys.exec_prefix,
              sep ='\n')

    @staticmethod
    def pygmentize():
        import pygments.cmdline
        args = ['', '-f', 'html', '-S', 'default']
        # SEE ALSO the -a option.
        with open("css/python.css", 'w') as f:
            sys.stdout = f
            pygments.cmdline.main(args)
        
        
        
    @staticmethod
    def start_server():
        import conf
        server_path = conf.apache_path
        with open(os.path.join(server_path,
                               "conf/httpd_extension.conf"),
                  mode = 'w') as f:
            directives = f"""

Alias /test {os.getcwd()}

<Directory {os.getcwd()} >
Require all granted
</Directory>

# Disabling cache capabilities.
# Browsers may cache data too.
<FilesMatch "\.(html|htm|js|css)$">
  FileETag None
  <IfModule mod_headers.c>
    Header unset ETag
    Header set Cache-Control "max-age=0, no-cache, no-store, must-revalidate"
    Header set Pragma "no-cache"
    Header set Expires "Wed, 12 Jan 1980 05:00:00 GMT"
  </IfModule>
</FilesMatch>

"""
            f.write(directives)
        subprocess.run(['./apachectl', '-k', 'start'],
                       cwd = os.path.join(server_path,
                                          "bin"),
                       check = True,
                       text = True)

    @staticmethod
    def stop_server():
        import conf
        server_path = conf.apache_path
        subprocess.run(['./apachectl', '-k', 'stop'],
                       cwd = os.path.join(server_path,
                                          "bin"),
                       check = True,
                       text = True)


    @staticmethod
    def compile_rst():
        import docutils.core
        import docutils.io
        parts = docutils.core.publish_parts(
            None,
            source_class=docutils.io.FileInput,
            source_path="./rst/first_page.rst",
            writer_name='html')
        html = f"""
<!DOCTYPE html>
<html>
  
  <head>
    <meta charset='UTF-8'/>
  </head>

{parts["body"]}

</html>
"""
        with open("./html/first_page.html", "w") as f:
            f.write(html)
        
    @staticmethod
    def compile_jsx():
        subprocess.run(['npx', 'babel', './jsx',
                        '--out-dir', './js', '--presets',
                        'react-app/prod'],
                       check = True,
                       text = True)
            
        
if __name__ == "__main__":
    args = parser.parse_args()
    for command_name in args.commands:
        getattr(Commands, command_name)()
    sys.exit(0)
