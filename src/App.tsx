import {
  CloseOutlined,
  ContactsTwoTone,
  EnvironmentOutlined,
  IdcardTwoTone,
  MailOutlined,
  PhoneOutlined,
  ReconciliationTwoTone,
} from '@ant-design/icons';
import { Form, Input, Timeline, Typography } from 'antd';
import React from 'react';
import avatar from './avatar.jpg';

function PersonalInfoItem(props) {
  const { label, value } = props;
  return (
    <div style={{ marginTop: 16 }}>
      <Typography.Title level={4}>{label}</Typography.Title>
      <Typography.Text>{value}</Typography.Text>
    </div>
  );
}

const employmentHistory = [
  {
    timeUntil: 'Present',
    company: 'Meinhardt Singapore Pte Ltd',
    position: 'Resident Engineer',
    projectDesc:
      'Proposed Additional & Alteration To Existing 2 Blocks Of 7-Storey Light Industrial Building With Basement Carpark On TS17 LOT 01616X At 70 & 72 Bendemeer Road (Kallang Planning Area)',
  },
  {
    timeUntil: 'April 2020',
    company: 'TWA Consultant Pte Ltd',
    position: 'Resident Engineer',
    projectDesc:
      'Proposed Erection of 3 Blocks of 5 Storey with Attic Residential flats development (70 units) with a swimming pool, communal facilities and basement carpark at 35 Gilstead Road',
  },
  {
    timeUntil: 'Nov 2018',
    company: 'CPG Consultantts PTE LTD',
    position: 'Resident Engineer',
    projectDesc:
      'Proposed Erection of New Singapore Boys’ Complex Consisting of 7 Blocks of Institution Buildings and Ancilliary Buildings at Jalan Bahar',
  },
  {
    timeUntil: 'Sept 2016',
    company: 'Mega Consult Pte Ltd',
    position: 'Resident Engineer',
    projectDesc:
      'Proposed Addition & Alteration to Existing 6-Storey Centrepoint Shopping Centre at Orchard Road',
  },
  {
    timeUntil: 'June 2015',
    company: 'Beca Carter Pte Ltd ',
    position: 'Resident Engineer',
    projectDesc:
      'Proposed erection of 2-Block of 30 sty Commercial Buildings & 2-Block of 34 sty Residential Buildings at Marina Way',
  },
  {
    timeUntil: 'July 2014',
    company: 'Mega Consult Pte Ltd',
    position: 'Resident Engineer',
    projectDesc:
      'Proposed Additions & Alterations to existing Basement 1 & 2, 1st to 6th sty and Roof Plan of the East Point Mall at Simei St 6',
  },
  {
    timeUntil: 'June 2013',
    company: 'TID Pte Ltd',
    position: 'Resident Engineer',
    projectDesc:
      'Proposed high end Condominium Housing Development Comprising of 1 Block of 24-sty (65 units) with  basement carpark and communal facilities at Nathan Road',
  },
  {
    timeUntil: 'March 2011',
    company: 'LEE & LEE Consultants Pte Ltd',
    position: 'Resident Engineer',
    projectDesc: 'Terminal 1 upgrading project at Changi Airport.',
  },
  {
    timeUntil: 'Jan 2010',
    company: 'PRPL Pte Ltd',
    position: 'Resident Engineer',
    projectDesc:
      'Proposed Erection of 4 storey Industrial Development at Tuas Bay Drive Avenue 4 for Pacific Refreshments Pte Ltd.',
  },
  {
    timeUntil: 'Nov 2008',
    company: 'Jack Investment Pte Ltd',
    position: 'Resident Engineer',
    projectDesc:
      'Proposed New erection of 10 storey Entertainment Development  comprising of commercial/multi storey carpark & single level overhead linkbridge at Victoria St (Iluma Shopping Centre)',
  },
  {
    timeUntil: 'April 2006',
    company: 'Grocery Logistics of Singapore Pte Ltd',
    position: 'Resident Engineer',
    projectDesc:
      'Proposed New Extension with Alterations & Additions to existing single-storey Grocery warehouse with 3-storey Ancillary office at 37 Joo Koon Circle',
  },
  {
    timeUntil: 'Sept 2004',
    company: 'Tiong Seng Contractors Pte Ltd',
    position: 'Resident Engineer',
    projectDesc:
      'Proposed Erection of 5 Block of 18-storey Park Green Executive Condominium with Two  Basements  Carpark @ Sengkang',
  },
  {
    timeUntil: 'Sept 2002 ',
    company: 'Euro-Asia Realty',
    position: 'Resident Engineer',
    projectDesc:
      '30-storey Condominium Development with one Basement Carpark@ Thompson Road',
  },
  {
    timeUntil: 'Feb 2001 ',
    company: 'Kim Seng Heng Engineering Construction',
    position: 'Senior Project Engineer',
    projectDesc: `• HDB BPN6C4 at Bukit Panjang (Jul 98 – Dec 99)
• 18-storey Condominium Development at Craig Road (Jan 2000 – Feb 2001)`,
  },
  {
    timeUntil: 'Jun 1998 ',
    company: 'Joint-Tech Construction ',
    position: 'Senior Project Engineer & Project Manager',
    projectDesc: `• Batch 3 Ederly Upgrading Project (Main sub-contractor of Ho Lee Construction)
• 66 Grange Road Condominium Development (Main sub-contractor of TPS Construction)`,
  },
  {
    timeUntil: 'Jan 1998',
    company: 'Right Construction ',
    position: 'Project Engineer & Project Manager',
    projectDesc: `• HDB N6C11 at Woodlands (July 95 – Oct 96)
• 8-storey of industrial flatted factory at Tannery Lane with one Basement Car Park (Oct 96 – Jan 98)`,
  },
  {
    timeUntil: 'Feb 1993',
    company: 'Nakano SG ',
    position: 'Site Supervisor',
    projectDesc: `Casa Meyfort Condominium`,
  },
  {
    timeUntil: 'Nov 1991',
    company: 'Lum Chang Construction ',
    position: 'Site Supervisor',
    projectDesc: `Trevose Park Condominium`,
  },
  {
    timeUntil: 'Oct 1990',
  },
];

const coverLetter = {
  title: 'RE: APPLICATION FOR THE POST OF RESIDENT ENGINEER',
  time: '6 Feb 2019',
  content: `Please find attached herewith is my resume stating my qualifications and the employment history for your reference. I am currently working as the RE for the Proposed Major A&A to existing 2 Blocks of 7-Storey Multi-User Light Industrial Commercial Building with Basement Car Park at Bendemeer Road.

I Graduated in 1995 from The University of Aberdeen, UK with a B.Eng ( Hons ) in Civil and Structural Engineering. Since then, I have been working for contractors for about 6 years as Site Engineer, Senior Engineer, and eventually as a Project Manager before joining developers and consultants for the position of Resident Engineer.

My involvement with contractors for the previous years includes taking charge of structural matters (mainly), assisting project manager in overall planning on the master programmed, study contract specifications and plan for the execution of site activities which include structural, architectural and M & E as well as external works. During foundation stage, I was heavily involved in the monitoring of the foundation activities such as having joint inspection with the R.E of client’s representative to confirm the soil strata for the bored pile, arranging and witnessing the sample for coring, conduct PDA and PIT test and etc. Besides this, I have also participated for the preparation and submission of method statement for the sequence of basement construction and obtained approval from the consultants prior to the commencement of construction works.

As a Resident Engineer representing consultants and developers, I am heavily involve in the overall planning and running for structural activities on site which covers interpretation of structural drawings, highlighting discrepancies from drawings and feed back to consultants at soonest possible prior to construction. My main duties and responsibilities are to be able to carry out structural inspection and monitor site progress properly prior to the final inspection carry out by client’s representative, and ensure that they are all appropriately constructed. I have also involved in other related issues pertaining to the architectural/finishing matters such as providing ideas/solutions for the mock up/sample unit to convince owner and assist in materials selection with cost effective price and at the same time be able to achieve the desired quality. My other participation on site includes attending conquas inspection with BCA officers (Building Control authority) for structural and architectural trades, quality mark assessment and etc.

I hope that with my past experiences with various contractors and developers, my positive attitude and educational background, I could make a valuable contribution to your organization. I would be grateful if I could have the opportunity to discuss my credentials and remuneration in detail personally at the time of interview at your convenience.

I look forward to your favorable reply.
Thanks.

Yours faithfully


T.C.Au
`,
};

type FormType = {
  expected_salary: string;
  availablitiy: string;
  cover_letter_time: string;
};

function App() {
  const [expectedSalary, set_expectedSalary] = React.useState('Infinity');
  const [availablitiy, set_availablitiy] = React.useState('1 Oct 2022');
  const [coverLetterTime, set_coverLetterTime] = React.useState('6 Feb 2019');
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    document.onkeydown = (event) => {
      if (event.key === 'a') {
        setIsVisible((prev) => !prev);
      }
    };
  }, []);

  return (
    <div>
      <Form<FormType>
        initialValues={{
          expected_salary: expectedSalary,
          availablitiy: availablitiy,
          cover_letter_time: coverLetterTime,
        }}
        className='form'
        style={{ display: isVisible ? undefined : 'none' }}
      >
        <Form.Item className='close'>
          <CloseOutlined onClick={() => setIsVisible(false)} />
        </Form.Item>
        <Form.Item name='expected_salary' label='Expected Salary'>
          <Input onChange={(e) => set_expectedSalary(e.target.value)} />
        </Form.Item>
        <Form.Item name='availablitiy' label='Availability'>
          <Input onChange={(e) => set_availablitiy(e.target.value)} />
        </Form.Item>
        <Form.Item name='cover_letter_time' label='Cover Letter Time'>
          <Input onChange={(e) => set_coverLetterTime(e.target.value)} />
        </Form.Item>
      </Form>
      <div className='container'>
        <div className='left'>
          <div className='top'>
            <div className='avatar'>
              <img src={avatar} alt='' width='164px' height='164px' />
            </div>
            <Typography.Title className='name'>
              <small>Mr. </small>
              Au Tai Chik <br />
              <i>(Joseph)</i>
            </Typography.Title>
            <Typography.Title level={2} className='wanted-position'>
              Resident Engineer
            </Typography.Title>
          </div>
          <div className='left-info'>
            <Typography.Title level={2} className='title'>
              <ContactsTwoTone />
              Contact Info
            </Typography.Title>
            <div className='contact-info'>
              <PhoneOutlined /> 97869443
            </div>
            <div className='contact-info'>
              <MailOutlined /> josephau2005@yahoo.com.sg
            </div>
            <div className='contact-info'>
              <EnvironmentOutlined /> Blk 467A, Admiralty Drive, #07-167,
              Singapore 751467
            </div>
            <Typography.Title level={2} className='title'>
              <IdcardTwoTone />
              Personal Info
            </Typography.Title>
            <PersonalInfoItem label='Date of Birth' value='15 February 1969' />
            <PersonalInfoItem label='Marital Status' value='Married' />
            <PersonalInfoItem
              label='Nationality'
              value='Malaysian (Singapore PR)'
            />
            <PersonalInfoItem
              label='Education'
              value='B.Eng.(Hons) in Civil & Structural Engineering (University of Aberdeen, UK)'
            />
            <PersonalInfoItem label='Driving License' value='Class 3' />
            <PersonalInfoItem
              label='Language'
              value='Speak/write English, Chinese and Malay'
            />
            <PersonalInfoItem label='Availability' value={availablitiy} />
            <PersonalInfoItem label='Expected Salary' value={expectedSalary} />
          </div>
        </div>
        <div className='right'>
          <Typography.Title level={2} className='title'>
            <ReconciliationTwoTone />
            Employment History
          </Typography.Title>
          <Timeline mode='left'>
            {employmentHistory.map((it) => (
              <Timeline.Item label={it.timeUntil} key={it.timeUntil}>
                <div>
                  {it.company || it.position ? (
                    <Typography.Title level={5}>
                      {it.company} — {it.position}
                    </Typography.Title>
                  ) : null}
                  <Typography.Text style={{ whiteSpace: 'pre-wrap' }}>
                    {it.projectDesc}
                  </Typography.Text>
                </div>
              </Timeline.Item>
            ))}
          </Timeline>
        </div>
        <div className='bottom'>
          <Typography.Title level={5} className='time'>
            {coverLetterTime}
          </Typography.Title>
          <Typography.Title level={3} className='title'>
            {coverLetter.title}
          </Typography.Title>
          <Typography.Text>{coverLetter.content}</Typography.Text>
        </div>
      </div>
    </div>
  );
}

export default App;
