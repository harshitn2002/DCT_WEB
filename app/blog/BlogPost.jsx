import React from "react";
import Link from "next/link";
import Image from "next/image";

const BlogPost = ({ slug }) => {
  const blogContent = {
    "machine-learning-perspectives": {
      title: "Machine Learning: A Data Science Process Perspectives",
      content: `
        <div style="text-align: center; margin-bottom: 20px; color:#fff">
          <Image src="/images/img1.jpeg" alt="Data science process" width={600} height={400} />
        </div>

        <h2 style="margin-top: 30px; margin-bottom: 20px; font-size: 24px; color: #d0e5fa; font-weight: bold;">Machine Learning: A Data Science Process Perspectives</h2>
        <blockquote style="font-style: italic; margin-bottom: 20px;">"Machine learning is a field of study that gives computers the ability to learn without being explicitly programmed."</blockquote>

        <p style="margin-bottom: 20px;">The characterization of machine learning coined by Arthur Samuel is often quoted and is genius in its broadness, but it leaves you with the question of how the computer learns. To achieve machine learning, experts develop general-purpose algorithms that can be used on large classes of learning problems. When you want to solve a specific task you only need to feed the algorithm more specific data. In a way, you're programming by example. In most cases a computer will use data as its source of information and compare its output to a desired output and then correct for it. The more data or "Experience" the computer gets, the better it becomes at its designated job, like a human does.</p>

        <h3 style="margin-top: 30px; margin-bottom: 20px; font-size: 20px; color: #d0e5fa; font-weight: bold;">When machine learning is seen as a process, the following definition is insightful:</h3>
        <blockquote style="font-style: italic; margin-bottom: 20px;">"Machine learning is the process by which a computer can work more accurately as it collects and learns given."</blockquote>

        <p style="margin-bottom: 20px;">For example, as a user writes more text messages on a phone, the phone learns more about the messages' common vocabulary and can predict (auto complete) their words faster and more accurately.</p>

        <h3 style="margin-top: 30px; margin-bottom: 20px; font-size: 20px; color: #d0e5fa; font-weight: bold;">Where machine learning is used in the data science process</h3>
        <p style="margin-bottom: 20px;">Although machine learning is mainly linked to the data-modelling step of the data science process, it can be used at almost every step.</p>

        <p style="margin-bottom: 20px;">The data modelling phase can't start until you have qualitative raw data you can understand. But prior to that, the data preparation phase can benefit from the use of machine learning. An example would be cleansing a list of text strings; machine learning can group similar strings together so it becomes easier to correct spelling errors. Machine learning is also useful when exploring data. Algorithms can root out underlying patterns in the data where they'd be difficult to find with only charts. Given that machine learning is useful throughout the data science process, it shouldn't come as a surprise that a considerable number of Python libraries were developed to make your life a bit easier.</p>

        <h3 style="margin-top: 30px; margin-bottom: 20px; font-size: 20px; color: #d0e5fa; font-weight: bold;">Types of machine learning</h3>
        <p style="margin-bottom: 20px;">Broadly speaking, we can divide the different approaches to machine learning by the amount of human effort that's required to coordinate them and how they use labelled data—data with a category or a real-value number assigned to it that represents the outcome of previous observations.</p>
        <ul style="margin-left: 20px; margin-bottom: 20px;">
          <li style="margin-bottom: 10px;"><strong>Supervised learning techniques</strong> attempt to discern results and learn by trying to find patterns in a labelled data set. Human interaction is required to label the data.</li>
          <li style="margin-bottom: 10px;"><strong>Unsupervised learning techniques</strong> don't rely on labelled data and attempt to find patterns in a data set without human interaction.</li>
          <li style="margin-bottom: 10px;"><strong>Semi-supervised learning techniques</strong> need labelled data, and therefore human interaction, to find patterns in the data set, but they can still progress toward a result and learn even if passed unlabeled data as well.</li>
        </ul>

        <h3 style="margin-top: 30px; margin-bottom: 20px; font-size: 20px; color: #d0e5fa; font-weight: bold;">Applications for machine learning in data science</h3>
        <ul style="margin-left: 20px; margin-bottom: 20px;">
          <li style="margin-bottom: 10px;">Finding oil fields, gold mines, or archaeological sites based on existing sites (classification and regression)</li>
          <li style="margin-bottom: 10px;">Finding place names or persons in text (classification)</li>
          <li style="margin-bottom: 10px;">Identifying people based on pictures or voice recordings (classification)</li>
          <li style="margin-bottom: 10px;">Recognizing birds based on their whistle (classification)</li>
          <li style="margin-bottom: 10px;">Identifying profitable customers (regression and classification)</li>
          <li style="margin-bottom: 10px;">Proactively identifying car parts that are likely to fail (regression)</li>
          <li style="margin-bottom: 10px;">Identifying tumours and diseases (classification)</li>
          <li style="margin-bottom: 10px;">Predicting the amount of money a person will spend on product X (regression)</li>
          <li style="margin-bottom: 10px;">Predicting the number of eruptions of a volcano in a period (regression)</li>
          <li style="margin-bottom: 10px;">Predicting your company's yearly revenue (regression)</li>
          <li style="margin-bottom: 10px;">Predicting which team will win the Champions League in soccer (classification)</li>
        </ul>
      `,
    },
    "sars-cov-2-inner-workings": {
      title: "Causes and Inner workings of the SARS-CoV-2",
      content: `
<div style="display: flex; justify-content: center; margin-bottom: 20px;">
  <img src="/images/img2.jpeg" alt="Bat virus transmission" width="600" height="400" style="margin: 0 10px;" />
  <img src="/images/img3.jpeg" alt="SARS-CoV-2 structure" width="600" height="400" style="margin: 0 10px;" />
  <img src="/images/img4.jpeg" alt="SARS-CoV-2 cell entry" width="600" height="400" style="margin: 0 10px;" />
</div>

        
        <h2 style="margin-top: 30px; margin-bottom: 20px; font-size: 24px; color: #d0e5fa; font-weight: bold;">Causes and Inner workings of the SARS-CoV-2</h2>
        
        <p style="margin-bottom: 20px;">Shi Zhenglis, Chief virologist, Wuhan Institute, China for the first time in 2004 found natural reservoir of corona viruses in bat caves of Southern China. Shi is also recognized world over as "Bat Women". In the last 16 years Shi and her co-workers visited various bat caves in southern subtropical provinces of China. They noted that there is a great risk of corona viruses jumping to humans from animals – particularly bats. Her team has identified SARS-CoV-2 that spread like wild fire across 210 countries all over the world. It is the first emergence of deadly corona virus with pandemic potential.</p>
        
        <p style="margin-bottom: 20px;">"Shiton Cave" of Kunming the capital of Yunnan is main cave where, Shi's team worked for five consecutive years on hundreds of bat corona viruses. According to Ralph Baric, University of North Carolina, USA – constant mixing of different viruses creates a great opportunity for dangerous new pathogens to emerge. Multiple viral strains had infected a single animal (bat), for new corona virus COVID-19. During three decades six different bat borne viruses: Hendra, Nipah, Marburg, SARS-CoV, MERS-CoV and Ebola. But, animal themselves are not the problem. Problem arise when human get in contact with them. Growing human population encroaching on wild life habitats with the use of land for agriculture purpose, wild life and live stock transportation across countries around world, sharp increase in domestic and international flight are the major cause of such viral epidemic. Now pandemics of new viral diseases are near certainty in coming years of 21st century.</p>
        
        <p style="margin-bottom: 20px;">Extensive researches in the last one year on Covid-19 disease has open an incredible amount of knowledge regarding inner workings of the novel corona virus. A SARS-CoV-2 virus is about 100 nanometers in diameter. Virus is consist of spherical protein inside a fatty membrane
        <p style="margin-bottom: 20px;">Extensive researches in the last one year on Covid-19 disease has opened an incredible amount of knowledge regarding the inner workings of the novel coronavirus. A SARS-CoV-2 virus is about 100 nanometers in diameter. The virus consists of spherical protein inside a fatty membrane that is studded with spike proteins. These spikes attach to receptors on human cells and allow the virus to enter. Once inside the cell, the virus hijacks the cellular machinery to replicate itself, creating thousands of copies that then burst out to infect new cells.</p>

        <h3 style="margin-top: 30px; margin-bottom: 20px; font-size: 20px; color: #d0e5fa; font-weight: bold;">Mechanism of Infection</h3>
        <p style="margin-bottom: 20px;">The infection begins when the spike protein of SARS-CoV-2 binds to the ACE2 receptor on the surface of a human cell. This interaction triggers the fusion of the viral envelope with the cell membrane, allowing the viral RNA to enter the cell. The RNA is then translated by the host cell's ribosomes to produce viral proteins. These proteins are assembled into new viral particles, which are released from the cell to infect other cells.</p>

        <h3 style="margin-top: 30px; margin-bottom: 20px; font-size: 20px; color: #d0e5fa; font-weight: bold;">Immune Response</h3>
        <p style="margin-bottom: 20px;">The body's immune response to SARS-CoV-2 involves both the innate and adaptive immune systems. The innate immune system responds quickly to the infection by recognizing viral components and producing interferons that inhibit viral replication. The adaptive immune system, which takes longer to respond, generates specific antibodies that target the virus and cytotoxic T cells that destroy infected cells.</p>

        <h3 style="margin-top: 30px; margin-bottom: 20px; font-size: 20px; color: #d0e5fa; font-weight: bold;">Vaccines and Treatments</h3>
        <p style="margin-bottom: 20px;">The development of vaccines against SARS-CoV-2 has focused on inducing an immune response against the spike protein, preventing the virus from entering human cells. mRNA vaccines, such as those developed by Pfizer and Moderna, use a small piece of the virus's mRNA to instruct cells to produce the spike protein, which then triggers an immune response. Other vaccines, like those from AstraZeneca and Johnson & Johnson, use a viral vector to deliver the spike protein gene into cells.</p>

        <p style="margin-bottom: 20px;">In addition to vaccines, treatments for COVID-19 include antiviral drugs that target various stages of the viral life cycle, as well as monoclonal antibodies that neutralize the virus by binding to its spike protein. Dexamethasone, a corticosteroid, has also been found to reduce mortality in severe cases of COVID-19 by dampening the excessive immune response known as a cytokine storm.</p>
      `,
    },
  };

  const post = blogContent[slug];

  return (
    <div className="max-w-3xl mx-auto p-6 text-white">
      <Link href="/blog" legacyBehavior>
        <a className="text-blue-500 hover:text-blue-700 flex items-center mb-4">
          ← Back to Blogs
        </a>
      </Link>
      <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
};

export async function getStaticPaths() {
  const paths = [
    { params: { slug: "machine-learning-perspectives" } },
    { params: { slug: "sars-cov-2-inner-workings" } },
  ];
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      slug: params.slug,
    },
  };
}

export default BlogPost;
