---
tags:
  - proposal
---

# The proposal: Quantitative metrics for data driven Enterprise UX design

#### Contents
[[toc]]

## Description of the topic

Businesses depend on computer software to get work done efficiently (Davenport, 1998), recently cloud based applications. These software help businesses in a wide variety of mission critical tasks. Some of such systems are Enterprise Resource Planning, Electronic Patient Records, Billing Software, Business Intelligence Tools and many more. Employees of such organisations spend a substantial amount of time on such software as part of their daily work lives.

However, most of these systems have traditionally been engineering driven and User Experience (UX) has been an after thought, if at all (Topi, Heikki & Lucas, Wendy & Babaian, Tamara. 2005). For instance, the Wikipedia page on Enterprise software defines it as “a computer software used to satisfy the needs of an organisation rather than individual users”.

On the other hand, consumer UX has been flourishing in the recent times with the focus being on the user. Design driven companies like Apple, IBM, Intuit and others are known to outperform the S&P (Standard & Poor’s Dow Jones) index by 228% over a period of 10 years (Michael Westcott, 2014). According a survey (Visual Objects, 2019) the world’s largest e-commerce company, Amazon.com, has the most appealing UX. ESPN.com's revenue jumped by 35% after they redesigned their home page based on the feedback they got from their users (InVision, 2015). Microsoft increased their annual revenue by $80 million on Bing.com just by changing the colour of the links in their search results (CNET, 2010).

Consumer UX is mature and has well defined Quantitative UX Metrics which help designers and researchers to understand the effectiveness of a particular design. For example, Google Analytics can used to evaluate usability of eCommerce websites (Hasan, et al, 2009). Such UX metrics in an enterprise context are absent in practice today. This study explores the use of such Quantitative UX metrics to measure effectiveness of designs in enterprise software.
## Background

Enterprise software enable businesses be more efficient, productive and profitable. Most of the large scale enterprises today commonly use such software to enable their business processes. According to Economic Intelligence Unit report (Economic Intelligence Unit, 2007), the design agency at Omnicom boosted their revenue by 25 - 30 percent by adopting collaborative tools between its different departments. According to Allied Market Research (Allied Market Research, 2018), the ERP market is expected to reach $41.69 billion by 2020 and total IT spending in enterprise is expected to reach $507 billion by 2020 (Statistica, 2019). Enterprise software, beyond doubt, is an essential tool for enterprises today and their wide adoption is a testimony to it.

However, enterprise software are complex systems with lots of functionality in them and combined with lack of focus on user experience, make these software hard to use (Davenport, 1998 and Topi, Heikki & Lucas, Wendy & Babaian, Tamara, 2005). In fact, many organisations stop using these software since they do not cater to the needs of the users (Topi, Heikki & Lucas, Wendy & Babaian, Tamara, 2005). Research has shown that 70% of the end users confirm that usability issues negatively impact productivity (Scheiber, et al. 2012).

To design good UX, it is important for the designers to know how effective the designs are. This is traditionally done using usability testing methods (Steve Krug, 2010 and Jacob Nielsen, 2001) to track task success rate, time taken to complete a task, error rate and user’s subjective satisfaction. However, these metrics are rarely measured because they are expensive (Jacob Nielsen, 2001). While a qualitative study reveals most usability problems by testing with as less as 5 users (Jacob Nielsen, 1993) but a quantitative study warrants a minimum of 20 participants for a single study (Jacob Nielsen, 2006) making the quantitative study 4 times as expensive as a qualitative study. In the domain of the consumer UX, like the design of e-commerce websites, low cost web analytics are employed to measure the relevant metrics at large scale (Layla Hasan, et al., 2009). However, due to the inherent nature of enterprise software, the web analytics metrics from the consumer UX domain do not transfer to the enterprise domain. Such web analytics metrics have not been developed for an enterprise perspective. This research proposes to explore and develop such a set of web analytics metrics that software developers and designers can use to measure UX at a large scale in an enterprise context.
## Statement of problem

To understand the effectiveness of designs, UX designers and researchers rely on data collected from users. This data can be gathered in a qualitative study, for example, Usability Testing sessions (Steve Krug, 2010) or in a quantitative study using a user analytics software (Layla Hasan, et al., 2009). In a typical user centered design process, these analytics tools are used to measure certain metrics to understand what is happening in the system and conduct a usability testing session to understand why is it happening.

Consumer UX has well defined UX Analytics Metrics like Visits/Sessions, Unique visitors, Pageviews, Average visit duration, Bounce rates, Entrances, Exit rate, etc... For example, Google Analytics was used to improve the design of Rutgers-Newark Law Library’s website (W Fang, 2007). However, these metrics are not very helpful while designing admin facing and enterprise software. Consumers have a variety of options and can leave a given website when they feel frustrated, however enterprise users do not have that option and have to struggle with the organisation chose tool to get their tasks done.

Enterprise UX lacks such quantitative metrics and associated tools to aid designers and researchers to design the right UX. Therefore to address this gap, the use of UX analytics in enterprise needs to be studied.
## Purpose of this study

Enterprise software developers are now realising the importance of user experience and are investing in incorporating design in their development process. For example, Salesforce now has Lightning Design System to make most of their applications consistent in UI.

UX in Enterprise is still relatively new. At enterprise software development companies with more than 500 employees, only 26% have had a full time designer from over 5 years (UXPin Industry Report, 2018). The industry is still figuring out the best practices and methods to employ while designing the enterprise software.

To enable these enterprise software development organisations create engaging user experiences, it is important to empower the UX designers and researchers with appropriate metrics to understand user behaviour in a quantitative context. Enriched with such data,

- User researchers can uncover the usability issues that are otherwise hidden

- UX designers will be able to craft the right interactions that will fulfil the user needs

This in turn will lead to

- Users being more productive and engaged at work using these software

- Organisations being more profitable and having their employees happier at the same time
## Aims and Objectives
### Aim

- The purpose of this study is to explore the usage of these metrics to determine the effectiveness of the designs in enterprise software. Thereby, this study aims at extending the knowledge of using web analytics to measure UX from the consumer UX domain to the enterprise UX domain.

- Investigate the current states of quantitative user research methods, associated metrics (if any) and roadblocks in enterprise software development organisations.

- Understand the needs of the designers and researchers in terms of the different metrics they need to measure UX
### Objectives

- Iteratively develop a set of quantitative UX analytic metrics in enterprise context

- Measure the effectiveness of these metrics on the designs produced at enterprise software development organisations
## Research questions

For a set of UX Analytics Metrics to be effective in an enterprise context, the primary research question that needs to be addressed is

**How can the effectiveness of a design be measured quantitatively through the use of analytics in an enterprise application context?**

To address the primary question above the following secondary questions follow

- What are the UX metrics in enterprise design currently being tracked (if any)? If none of the metrics are being tracked, what are the roadblocks being faced?
- What metrics do designers and researchers need to measure the effectiveness of a design?

## Contribution to knowledge

Today, though there is a pressing need to measure the effectiveness of a design in an enterprise application context (Topi, Heikki & Lucas, Wendy & Babaian, Tamara, 2005), but there are no established metrics/tools to do so quantitatively at a large scale. The existing quantitative methods usable in an enterprise context are 4 times as expensive as a qualitative study since they require moderation by a researcher (Jacob Nielsen, 2001). Hence these methods are rarely used. Consumer UX design processes employ low cost web analytics tools and methods to measure these metrics at a large scale (Layla Hasan, et al., 2009), however, these are not transferable to the enterprise UX.

The outcome of this research study is to establish a set of novel quantitative UX metrics that can aid designers and researchers discover the design problems users face in their daily lives. This study hence focuses on extending the knowledge of web analytics to measure UX in the consumer world to the enterprise world. These outcomes will benefit a wide variety of audience including

- Enterprise UX designers to effectively design tools that can help users perform their daily tasks in a productive and pleasurable manner

- User researchers to uncover design problems

- Enterprise software development organisations to address user needs better

- Enterprises to measure effectiveness of the tools they are deploying at their organisations

- And more importantly to end users who will reap the benefits of well designed enterprise software
## Methodology

This study will apply both qualitative and quantitative research methods during different phases of the study. As the first step, a survey of existing UX analytics tools and practices would be carried out with Product management, UX designers and Researchers to understand what metrics are measured and their implications on design.

To understand the design processes in enterprises, UX metrics, their problems and goals, in-person and remote unstructured and semi structured interviews will be conducted. These interviews will be designed based on the outcomes from the initial survey done during this study. The qualitative data collected will be analysed for patterns and trends, which will help establish the user needs, the current trends and challenges of UX metrics in enterprises. Design workshops with the designers and researchers will be conducted to create artefacts like experience maps, journey maps, UX storyboards and prospective UX metrics.

Then various low fidelity metrics will be developed iteratively. Each iteration will be 2 weeks in duration and will follow Lean UX practices. These metrics will only be in prototypes at this stage and will be tested with designers and researchers qualitatively. The data gathered will be analysed for their effectiveness in aiding the design process. This data will be fed back into the design cycle that will influence the next iterations of metrics. Once the low-fidelity designs are established, a minimum viable product (MVP) will be developed that could be deployed in either a live or a test enterprise application. This MVP will be built using lean/agile processes and will involve data analytics as a major challenge. A certain set of designers and researchers will be given access to the analytics tool. A longitudinal study will be conducted during their internal design cycles to understand the effectiveness of the metrics generated. For the study, an experimental research method will be followed. A number of designers and researchers (6-10) from either medium or large enterprise software development organisations will be chosen. The designers and researchers would be distributed into 2 identical groups. The designs generated by the experimental team will be compared with that of the control group’s generated designs to evaluate the impact of UX metrics in the design process.

## Outcomes

This research will conclude with the following outputs:

- A set of novel UX metrics that can be used to measure UX in enterprise web applications

- A web based tool (MVP) that can be used to measure the above defined UX metrics

- Recommendations on incorporating the UX metrics in the design process

## References

1. Economic Intelligence Unit. (2007). ’ Collaboration — transforming the way business works ’ , A report from the EIU sponsored by Cisco Systems .
2. Allied Market Research. (2018). https://www.alliedmarketresearch.com/press-release/ global-ERP-software-market-is-expected-to-reach-41-69-billion-by-2020.html
3. Statistica. (2019). https://www.statista.com/statistics/203428/total-enterprise- software-revenue-forecast/
3. Topi, Heikki & Lucas, Wendy & Babaian, Tamara. (2005). Identifying Usability Issues with an ERP Implementation.. 128-133.
3. Scheiber, Florian & Wruk, Dominika & Oberg, Achim & Britsch, Johannes & Woywode, Michael & Maedche, Alexander & Kahrau, Felix & Meth, Hendrik & Wallach, Dieter & Plach, Marcus. (2012). Software Usability in Small and Medium Sized Enterprises in Germany: An Empirical Study. 10.1007/978-3-642-31371-4.
3. https://www.uxpin.com/enterprise-ux-design-2017-2018-industry-report
3. Davenport, T.H. (1998). Putting the enterprise back into the enterprise system. Harvard Business Review, 121-132
3. Topi, Heikki & Lucas, Wendy & Babaian, Tamara. (2005). Identifying Usability Issues with an ERP Implementation.. 128-133.
3. Steve Krug, Rocket Surgery Made Easy: The Do-It-Yourself Guide to Finding and Fixing Usability Problems
3. Jacob Nielsen. (2001). Usability Metrics - https://www.nngroup.com/articles/usability- metrics/
3. Jacob Nielson. (1993). A Mathematical Model of the Finding of Usability Problems
3. Jacob Nielsen. (2006). https://www.nngroup.com/articles/quantitative-studies-how- many-users/
3. Layla Hasan, Anne Morris, Steve Probets. (2009). Using Google Analytics to Evaluate the Usability of E-commerce Sites
3. Michael Westcott. (2009). https://www.dmi.org/blogpost/1093220/182956/Design- Driven-Companies-Outperform-S-P-by-228-Over-Ten-Years--The-DMI-Design-Value- Index
3. Visual Objects. (2019). https://visualobjects.com/web-design/top-web-designers/ how-different-generations-use-top-websites
3. https://www.cnet.com/news/behind-bings-blue-links/
3. Wei Fang. (2007). Using Google Analytics for Improving Library Website Content and Design: A Case Study
3. https://en.wikipedia.org/wiki/Enterprise_software
3. InVision. (2015). https://www.invisionapp.com/inside-design/statistics-on-user- experience/
3. Salesforce - Lightning design system. https://www.lightningdesignsystem.com/
