import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Documentation';
import Markdown from '../../../components/Markdown';
import Video from '../../../components/Video';
import Code from '../../../components/Code';
import image from '../../../assets/images/quickstart/setup/final.png';

export default (props) => {
  return (
    <Template
      title="Modules"
      subtitle="Dynamically import files from folders in your project."
    >
      <h2>
        Goal
      </h2>
      <p>
        If you've ever used a convention-driven framework, you've probably noticed they exhibit a common
        behavior where the act of you creating a file in some directory in your project causes the framework
        to automatically generates a series of behaviors based on the location, name, and contents of that file.
      </p>
      <p>
        To accomplish that, the framework needs to be able to dynamically import and inspect the files in
        project directories. In situations where there may be dozens of files with fairly similar behavior
        (such as reducer and action files in Redux) this can also produce a lot of tedious "wiring" code
        (such as "import the file, pass to X, reference it in Y") which can be an easy source of human
        through simple forgetfulness (such as "oops, the code threw an error, I forgot to reference it in Y").
      </p>
      <p>
        If the wiring process is truly that tedious, you can remove the potential for human error by writing
        code that does it for you, similar to the approach used by convention-driven frameworks. You can also
        use this approach to break up large files into a directory with several smaller files, and have your
        code automatically combine any files in that directory back into a single file.
      </p>

      <h2>
        Approach
      </h2>
      <p>
        We're going to use a feature of webpack called <code>require.context</code> in order to import
        entire folders. This approach will let us choose whether to include files from nested folders, or
        only files in the root folder. We can also provide a RegEx expression that acts a filter about
        what kinds of files to import.
      </p>
      <p>
        Once the files are imported, we'll combine them to form an object that mirrors the folder structure,
        using the names of the files folders as keys in the object. We'll then be able to iterate through
        this object in order to perform actions like automatic code wiring and code generation.
      </p>

      <h2>
        Demo
      </h2>
      <p>
        Watch the video below to see the solution <code>@lore/config</code> uses to solve this. Then
        explore Setup and Usage if you want to use this same approach in your own project.
      </p>

      <Video videoId="4lsKM1WvdL4" />

    </Template>
  )
};
