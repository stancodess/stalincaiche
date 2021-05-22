import React from 'react';
import { graphql, useStaticQuery, grap } from 'gatsby';
import Posts from './posts';
import Certificate from './certificate';
import Course from './course';


export default () => {

    const data = useStaticQuery(graphql`
        {
            codigofacilitoJson {
                data {
                    courses {
                        title
                        progress
                        url
                    }
                }
            }
        }
    `);

    return (
        <section>
            <div className="mt-24">
                <div className="max-w-4xl mx-auto overflow-x-scroll">
                    <Posts
                        data={ data.codigofacilitoJson.data.courses }
                        card={Certificate}
                        title="Mis certificados online en Código Facilito"
                    />
                </div>
                <div className="max-w-4xl mx-auto overflow-x-scroll">
                    <Posts
                        data={ data.codigofacilitoJson.data.courses }
                        card={Course}
                        title="Mis Cursos en Código Facilito"
                    />
                </div>
            </div>
        </section>
    );
}