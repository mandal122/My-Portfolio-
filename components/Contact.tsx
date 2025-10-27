
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
          <p className="text-lg text-muted mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to discuss a potential opportunity? I'd love to hear from you.
          </p>
        </div>
        <div className="max-w-xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-light mb-4">
                Email me at:
            </p>
            <a href="mailto:hello@digitalmarketer.com" className="text-2xl md:text-3xl font-semibold text-accent hover:underline">
                hello@digitalmarketer.com
            </a>
            <div className="mt-8">
                <p className="text-xl md:text-2xl text-light mb-4">
                    Or find me on:
                </p>
                <div className="flex justify-center space-x-6">
                    <a href="#" className="text-muted hover:text-accent transition-colors duration-300">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/></svg>
                        <span className="sr-only">LinkedIn</span>
                    </a>
                    <a href="#" className="text-muted hover:text-accent transition-colors duration-300">
                         <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.295 1.616 4.224 3.765 4.664-.69.188-1.433.23-2.185.084.636 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.588-7.52 2.588-.49 0-.974-.03-1.455-.086 2.685 1.723 5.874 2.73 9.342 2.73 11.206 0 17.34-9.282 17.34-17.34 0-.264-.006-.528-.018-.79A12.332 12.332 0 0024 4.557z"/></svg>
                        <span className="sr-only">Twitter</span>
                    </a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
