using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace RVLCS.Web.Pages
{
    public class ServiceModel
    {
        public string Image { get; set; }
        public string Title { get; set;}
        public string[] List { get; set;}
    }

    public class IndexModel : PageModel
    {
        [BindProperty]
        public List<ServiceModel> Services { get; } = new List<ServiceModel>(new[] {
            new ServiceModel() {
                Image = "/img/fair-housing.png",
                Title = "fair housing", 
                List = new[] { 
                    "Descrimination and Lending Practices",
                    "HMDA",
                    "Sampling and Data Analytics"
                }
            },
            new ServiceModel() { 
                Image = "/img/fair-lending.png",
                Title = "fair lending",
                List = new[] { 
                    "Advertising and Marketing",
                    "Loan Origination",
                    "Processing",
                    "Underwriting",
                    "Valuations"
                }
            },
            new ServiceModel() {
                Image = "/img/settlement.png",
                Title = "national mortgage settlement",
                List = new[] {
                    "Applicability",
                    "Availability",
                    "Determinations",
                    "Loss Claims"
                }
            },
            new ServiceModel() {
                Image = "/img/regulatory.png",
                Title = "Regulatory Oversight, Reporting, and Matrices",
                List = new[] {
                    "Fannie Mae",
                    "Freddie Mac",
                    "USDA",
                    "FHA/HUD",
                    "VA",
                    "Treasury",
                    "FTC",
                    "CFPB",
                    "OCC"
                }
            },
            new ServiceModel() {
                Image = "/img/servicing.png",
                Title = "Mortgage Servicing and Mortgage Default",
                List = new[] {
                    "CFBP",
                    "Dodd-Frank Guidelines/Regulations",
                    "Washington State Foreclosure Fairness Act",
                    "California-Homeownership Bill of Rights (HBOR)",
                    "Deed in Lieu",
                    "Shortsales",
                    "Short Payoffs",
                    "Force Placed Insurance",
                    "QWR’s",
                    "Error Resolution",
                    "Early Intervention",
                    "Call and Conversation Logs",
                    "ARM Analysis, Adjustments",
                    "Supplemental Directives",
                    "Bulletins",
                    "Federal Registry Publications",
                    "GSE and Non-GSE Portfolios",
                    "Securitization",
                    "Net Present Value (NPV)",
                    "Calculation of DTI, TDTI, TLTC, CLTV, Income, Ratios",
                    "Amortization Schedules",
                    "Transfers",
                    "On-boarding/Off-boarding",
                    "Pooling and Servicing Agreements (PSA)",
                    "Advance Claims",
                    "Valuations, BPO, AVM-Work Files and Conflicts of Interest",
                    "Disaster Programs",
                    "Moratoriums"
                }
            },
            new ServiceModel() {
                Image = "/img/fha.png",
                Title = "FHA",
                List = new[] {
                    "Title One Loans",
                    "Modifications",
                    "Short Pay-offs",
                    "HMDA COMPLIANCE",
                    "EEM Loans",
                    "Loss Mitigation Steps",
                    "Partial Claims",
                    "Mortgage Letters"
                }
            },
            new ServiceModel() {
                Image = "/img/hecm.png",
                Title = "HECM/Reverse Mortgage",
                List = new[]{
                    "HUD-Mortgage Letters",
                    "Insurance and Lender Paid-Force Placed Insurance",
                    "De-Minimis Rules",
                    "Reinstatement",
                    "Loss Mitigation"
                }
            },
            new ServiceModel() {
                Image = "/img/landlord-tenant.png",
                Title = "Landlord/Tenant",
                List = new[] {
                    "Leases",
                    "Leasehold Estates",
                    "Eviction/Wrongful Eviction Claims",
                    "Discrimination"
                }
            },
            new ServiceModel() {
                Image = "/img/commercial.png",
                Title = "Commercial",
                List = new[] {
                    "Applicability of Consumer Protection Claims",
                    "Collateral and Cross-Collateralization",
                    "Pledge and Hypothecation",
                    "Mezzanine Financing"
                }
            },
            new ServiceModel() {
                Image = "/img/mha.png",
                Title = "Pre/Post MHA-HAMP",
                List = new[] {
                    "HAFA",
                    "2MP",
                    "Incentive Payments",
                    "Servicing Alignment Initiative",
                    "Servicer Participation Agreement",
                }
            },
            new ServiceModel() {
                Image = "/img/consumer-protection.png",
                Title = "Consumer Protection Claims",
                List = new[] {
                    "RESPA",
                    "TILA",
                    "TRID",
                    "ECOA",
                    "FDCPA",
                    "FCRA",
                    "FACTA",
                    "UDAP",
                    "WRONGFUL FORECLOSURE"
                }
            },
            new ServiceModel() {
                Image = "/img/damage-analysis.png",
                Title = "Damage Analysis",
                List = new[]{
                    "Loss of Use",
                    "Amortized Losses",
                    "Claims in General",
                    "Reverse Calculations",
                    "Loss Mitigation",
                }                
            },
            new ServiceModel() {
                Image = "/img/title-claims.png",
                Title = "Title Claims",
                List = new[] {
                    "Chain of Title",
                    "Vesting Disputes",
                    "Recording",
                    "Free Floating Deed/Documents/Assignments/Allonges",
                    "Life Estates",
                    "Lot Line and Property Disputes"
                }
            }
        });

        public void OnGet()
        {

        }
    }
}
