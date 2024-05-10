import React, { useEffect, useState } from 'react'
import { getCompanyProfile } from '../../../api';
import { useParams } from 'react-router-dom';
import { CompanyProfile } from '../../../company';
import Sidebar from '../../Sidebar/Sidebar';
import CompanyDashboard from '../../CompanyDashboard/CompanyDashboard';
import Tile from '../../Tile/Tile';

interface Props {}

const CompanyPage = (props: Props) => {
  let {ticker} = useParams();
  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!);
      setCompany(result?.data[0]);
    }
    getProfileInit();
  }, [])

  return <>
  {company ? (
    <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">

     <Sidebar />
     <CompanyDashboard>
        <Tile title="Company Name" subTitle={company.companyName}></Tile> 
     </CompanyDashboard>

    </div>
    ): (
      <div>Company not found!</div>
    )}
  </>
};

export default CompanyPage