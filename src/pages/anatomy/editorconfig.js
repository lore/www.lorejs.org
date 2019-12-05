import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Anatomy';
import Code from '../../components/Code';

export default (props) => {
  return (
    <Template>
      <h1>
        .editorconfig
      </h1>
      <p>
        This file declares project configurations settings like indentation (tabs vs spaces), indentation
        size, and whether to trim trailing whitespace at the end of file lines.
      </p>
      <p>
        This file is useful as a way to agnostically declare project settings, as it can be consumed and
        applied by a wide variety of IDEs, text editors and command line editing programs. For example,
        if you write code in WebStorm, the IDE will automatically see this file and apply the settings,
        so you don't have to worry about whether the code you're writing adheres to project settings.
      </p>
      <p>
        For documentation about this file, see the <a href="http://editorconfig.org">editorconfig.org</a> website.
      </p>

      <h3>
        Defaults
      </h3>
      <p>
        The default file included in new projects looks like this:
      </p>
      <Code text={`
      root = true

      [*]
      indent_style = space
      indent_size = 2
      end_of_line = lf
      charset = utf-8
      trim_trailing_whitespace = true
      insert_final_newline = true
      `}/>
    </Template>
  );
};
