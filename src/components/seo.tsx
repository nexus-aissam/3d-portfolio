import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO = ({
  title = "Aissam Irhir - Senior Backend Developer & Project Controller | Node.js Expert",
  description = "🚀 Senior Backend Developer at FlexiApps with 2+ years experience in Node.js, Express.js, MongoDB & real-time systems. Expert in API development, microservices architecture, and team leadership. Building scalable web applications with modern technologies.",
  keywords = "senior backend developer, nodejs expert, expressjs specialist, mongodb developer, javascript typescript, api development, real-time systems, socket.io, microservices architecture, devops, project management, team leadership, full-stack developer, rabat morocco developer, flexi apps backend developer",
  image = "https://media.licdn.com/dms/image/v2/D4E03AQEy6cwtNg5_tw/profile-displayphoto-shrink_400_400/B4EZdQx8e1HYAg-/0/1749406960541?e=1758153600&v=beta&t=rMATkOdZ7RJcl3vjfQGSsEI-Knwa5mJ3gxPhEPLPrYc",
  url = "https://aissam-irhir-portfolio.netlify.app",
  type = "profile"
}: SEOProps) => {
  const fullTitle = title.includes("Aissam") ? title : `${title} | Aissam Irhir`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Aissam Irhir" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Aissam Irhir Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@aissam_irhir" />
      <meta name="twitter:site" content="@aissam_irhir" />

      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="MA" />
      <meta name="geo.placename" content="Rabat, Morocco" />
      <meta name="geo.position" content="34.025917;-6.834198" />
      <meta name="ICBM" content="34.025917, -6.834198" />
      <meta name="revisit-after" content="1 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta httpEquiv="content-language" content="en-us" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* Enhanced Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Aissam Irhir",
          "givenName": "Aissam",
          "familyName": "Irhir",
          "jobTitle": "Senior Backend Developer & Project Controller",
          "description": description,
          "url": url,
          "image": {
            "@type": "ImageObject",
            "url": image,
            "width": 400,
            "height": 400
          },
          "email": "aissamirhir@gmail.com",
          "telephone": "+212-XXX-XXX-XXX",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Rabat",
            "addressCountry": "Morocco",
            "addressRegion": "Rabat-Salé-Kénitra"
          },
          "nationality": "Moroccan",
          "sameAs": [
            "https://github.com/nexus-aissam",
            "https://www.linkedin.com/in/aissam-irhir/",
            "https://aissam-irhir-portfolio.netlify.app"
          ],
          "hasOccupation": {
            "@type": "Occupation",
            "name": "Backend Developer",
            "occupationLocation": {
              "@type": "City",
              "name": "Rabat, Morocco"
            },
            "skills": [
              "Node.js Development",
              "Express.js Framework",
              "MongoDB Database",
              "JavaScript Programming",
              "TypeScript Development",
              "Socket.io Real-time",
              "API Development",
              "Microservices Architecture",
              "DevOps Operations",
              "Project Management",
              "Team Leadership"
            ]
          },
          "knowsAbout": [
            {
              "@type": "Thing",
              "name": "Node.js",
              "description": "JavaScript runtime for server-side development"
            },
            {
              "@type": "Thing", 
              "name": "Express.js",
              "description": "Web application framework for Node.js"
            },
            {
              "@type": "Thing",
              "name": "MongoDB",
              "description": "NoSQL database for modern applications"
            },
            {
              "@type": "Thing",
              "name": "Socket.io",
              "description": "Real-time bidirectional event-based communication"
            },
            {
              "@type": "Thing",
              "name": "Microservices",
              "description": "Architectural approach for building distributed systems"
            }
          ],
          "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Software Engineering Education"
          }
        })}
      </script>

      {/* Website/Organization Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Aissam Irhir Portfolio",
          "description": "Professional portfolio of Aissam Irhir, Senior Backend Developer specializing in Node.js and modern web technologies",
          "url": url,
          "author": {
            "@type": "Person",
            "name": "Aissam Irhir"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${url}?search={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        })}
      </script>

      {/* Professional Service Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Aissam Irhir Backend Development Services",
          "description": "Professional backend development services specializing in Node.js, Express.js, MongoDB, and real-time applications",
          "provider": {
            "@type": "Person",
            "name": "Aissam Irhir"
          },
          "areaServed": {
            "@type": "Place",
            "name": "Worldwide"
          },
          "serviceType": [
            "Backend Development",
            "API Development", 
            "Database Design",
            "Real-time Systems",
            "Microservices Architecture",
            "DevOps Services"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;