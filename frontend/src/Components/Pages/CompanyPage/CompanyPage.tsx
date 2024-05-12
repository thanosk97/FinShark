import React, { useEffect, useState } from 'react'
import { getCompanyProfile } from '../../../api';
import { useParams } from 'react-router-dom';
import { CompanyProfile } from '../../../company';
import Sidebar from '../../Sidebar/Sidebar';
import CompanyDashboard from '../../CompanyDashboard/CompanyDashboard';
import Tile from '../../Tile/Tile';
import Spinner from '../../Spinner/Spinner';

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
     <CompanyDashboard ticker={ticker!}>
        <Tile title="Company Name" subTitle={company.companyName} /> 
        <Tile title="Price" subTitle={"$" + company.price.toString()} /> 
        <Tile title="DCF" subTitle={"$"+company.dcf.toFixed(2).toString()} /> 
        <Tile title="Sector" subTitle={company.sector} /> 
        <p className='bg-white shadow rounded text-medium text-gray-900 p-3 mt-1 m-4'>
          {company.description}
        </p>
     </CompanyDashboard>

    </div>
    ): (
      <Spinner />
    )}
  </>
};

export default CompanyPage