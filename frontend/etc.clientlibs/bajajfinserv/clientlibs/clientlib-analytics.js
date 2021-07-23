try {
    var analyticsPageName = pageName.substring(1, pageName.length).replace(
        /\//gi, ":");
    var analyticsSectionName = analyticsPageName.substr(0, analyticsPageName
        .indexOf(':'));
    var analyticsSubSectionName = subSectionNameFromSightly; // analyticsPageName.substring(analyticsPageName.indexOf(':')+1,analyticsPageName.lastIndexOf(':'));

    var digitalData = digitalData || {};
    digitalData = {
        page: {
            name: analyticsPageName,
            siteSection: analyticsSectionName === "" ? analyticsPageName : analyticsSectionName,
            siteSubsection: analyticsSubSectionName === "" ? analyticsPageName : analyticsSubSectionName,
        },

        product: {
            name: productName,
            isProduct: isProduct,
            data: {}
        }
    };

} catch (e) {
    console.error(e)
}

/*
 * Travel Insurance Analytics Calls
 */
function triggerSetProduct(productName) {
    try {
        digitalData.product.name = productName;
        digitalData.product.isProduct = true;
    } catch (e) {
        console.error(e)
    }
}

function triggerError(data) {
    try {
        digitalData.error = JSON.parse(data);
        _satellite.track("analytics-error");
    } catch (e) {
        console.error(e)
    }
}

function triggerTravelQuoteData(countries, startDate, endDate, insuredFor) {
    try {
        var oneDay = 1000 * 60 * 60 * 24;

        digitalData.product.data.countries = countries;
        digitalData.product.data.startDate = startDate;
        digitalData.product.data.endDate = endDate;
        digitalData.product.data.insuredFor = insuredFor;

        var startDateParts = startDate.split("-");
        var startDt = new Date(startDateParts[0], startDateParts[1] - 1,
            startDateParts[2]);
        var endDateParts = endDate.split("-");
        var endDt = new Date(endDateParts[0], endDateParts[1] - 1,
            endDateParts[2]);
        var noOfDays = (endDt.getTime() - startDt.getTime()) / oneDay;

        digitalData.product.data.noOfDays = noOfDays;

        var today = new Date(new Date().getFullYear(), new Date().getMonth(),
            new Date().getDate());

        var daysToTravel = (startDt.getTime() - today.getTime()) / oneDay;
        digitalData.product.data.daysToTravel = daysToTravel;

        _satellite.track("travel-get-quote");
    } catch (e) {
        console.error(e)
    }
}

function triggerTravelBuyNowData(sourceButton, variantCode, isRecommended,
    sumAssured, start) {
    try {
        //digitalData.product.data = {};
        digitalData.product.data.sourceButton = sourceButton;
        digitalData.product.data.variantCode = variantCode;
        digitalData.product.data.isRecommended = isRecommended;
        digitalData.product.data.sumAssured = sumAssured;
        if (start) {
            _satellite.track("travel-buy-now-start");
        } else {
            _satellite.track("travel-buy-now-end");
        }
    } catch (e) {
        console.error(e)
    }

}

function triggerTravelCompareStartData(variantCode, sumAssured, isRecommended) {
    try {
        digitalData.product.data.variantCode = variantCode;
        digitalData.product.data.isRecommended = isRecommended;
        digitalData.product.data.sumAssured = sumAssured;
        _satellite.track("travel-compare-start");
    } catch (e) {
        console.error(e)
    }
}

function triggerTravelCompareEndData(compareVariantCodes) {
    try {
        digitalData.product.data.compareVariantCodes = compareVariantCodes;
        _satellite.track("travel-compare-end");
    } catch (e) {
        console.error(e)
    }
}

/*
 * Common Functions
 */

// Use Send Variant for EMAIL & DOWNLOAD BROCHURE
function triggerEmail(variantCode, sumInsured, isRecommended) {
    try {
        digitalData.product.data.variantCode = variantCode;
        digitalData.product.data.sumInsured = sumInsured;
        digitalData.product.data.isRecommended = isRecommended;
        _satellite.track("email-variant");
    } catch (e) {
        console.error(e)
    }
}

function triggerDownload(variantCode, sumInsured, isRecommended) {
    try {
        digitalData.product.data.variantCode = variantCode;
        digitalData.product.data.sumInsured = sumInsured;
        digitalData.product.data.isRecommended = isRecommended;
        _satellite.track("download-variant");
    } catch (e) {
        console.error(e)
    }
}

function triggerCommonCallUs(start) {
    try {
        if (start) {
            _satellite.track("call-us-start");
        } else {
            _satellite.track("call-us-end");
        }
    } catch (e) {
        console.error(e)
    }
}

/*
 * Health Insurance Analytics Calls
 */

function triggerHealthGetQuote(gender, location, insuredFor, mobileNumber, email) {
    try {
        digitalData.product.data = {};
        digitalData.product.data.gender = gender;
        digitalData.product.data.location = location;
        digitalData.product.data.insuredFor = insuredFor;
        digitalData.product.data.mobileNumber = mobileNumber || "";
        digitalData.product.data.email = email || "";

        _satellite.track("health-get-quote");
    } catch (e) {
        console.error(e)
    }
}

function triggerHealthBuyNow(variant, tenor, isRecommended, sumInsured,
    buyNowSource, start) {
    try {
        digitalData.product.data.variant = variant;
        digitalData.product.data.tenor = tenor;
        digitalData.product.data.isRecommended = isRecommended;
        digitalData.product.data.sumInsured = sumInsured;
        digitalData.product.data.buyNowSource = buyNowSource;

        if (start) {
            _satellite.track("health-buy-now-start");
        } else {
            _satellite.track(" health-buy-now-end");
        }
    } catch (e) {
        console.error(e)
    }
}

/*
 * Cyber Insurance Analytics Calls
 */
function triggerCyberBuyNow(coveringFor) {
    try {
        digitalData.product.data.coveringFor = coveringFor;
        _satellite.track("cyber-buy-now-end");
    } catch (e) {
        console.error(e)
    }
}

function triggerLoanApplyNow() {
    try {
        digitalData.product.name = window.loanProductname;
        _satellite.track("loan-applyNow");
    } catch (e) {
        console.error(e)
    }
}

function triggerLoanDockApplyNow() {
    try {
        digitalData.product.name = window.loanProductname;
        _satellite.track("loan-dock-apply-now");
    } catch (e) {
        console.error(e)
    }
}

function triggerLoanIntrestRateApplyNow() {
    try {
        digitalData.product.name = window.loanProductname;
        _satellite.track("loan-intrest-rate-apply-now");
    } catch (e) {
        console.error(e)
    }
}

function triggerLoanEMIApplyNow() {
    try {
        digitalData.product.name = window.loanProductname;
        _satellite.track("loan-emi-applyNow");
    } catch (e) {
        console.error(e)
    }
}

function triggerLoanEligibilityApplyNow(that) {
    try {
        digitalData.product.name = window.loanProductname;
        digitalData.product.data.loanAmount = that.getAttribute("data-loanamount");
        _satellite.track("loan-eligibility-apply-now");
    } catch (e) {
        console.error(e)
    }
}

function triggerLoanRepaymentSchedule() {
    try {
        digitalData.product.name = window.loanProductname;
        _satellite.track("loan-repayment-schedule");
    } catch (e) {
        console.error(e)
    }
}

function triggerEMICalculator(analyticsDataObj) {
    try {
        digitalData.product.tool = {};
        digitalData.product.tool.name = "EMI calculator";
        digitalData.product.tool.data = {
            calculatorName: "EMI Calculator",
            loanAmount: "",
            tenure: "",
            rateOfIntrest: ""
        }
        digitalData.product.name = window.loanProductname || "";
        digitalData.product.tool.data.loanAmount = analyticsDataObj.loanamount || "";
        digitalData.product.tool.data.tenure = analyticsDataObj.tenureloan || "";
        digitalData.product.tool.data.rateOfIntrest = analyticsDataObj.interestrate || "";
        _satellite.track("loan-emi-calculateNow");
    } catch (e) {
        console.error(e)
    }

}

function triggerElegibilityCalculator(analyticsDataObj) {
    try {
        digitalData.product.tool = {};
        digitalData.product.tool.name = "Elegibility calculator";
        digitalData.product.tool.data = {
            productCode: "",
            productName: "",
            dateOfBirth: "",
            income: "",
            obligation: "",
            cityName: "",
            annualRevenue: "",
            typeOfBusiness: "",
            occupationType: "",
            degree: "",
            specialisation: "",
            experience: "",
            sanctionLoanAmount: "",
            loanStartYear: "",
            eligibilityAmount: ""
        }
        digitalData.product.tool.data.productName = window.loanProductname
        digitalData.product.tool.data.productCode = analyticsDataObj.productcode ||
            "";
        digitalData.product.tool.data.annualRevenue = analyticsDataObj.turnoverRange ||
            "";
        digitalData.product.tool.data.cityName = analyticsDataObj.cityval || "";
        digitalData.product.tool.data.dateOfBirth = analyticsDataObj.dob || "";
        digitalData.product.tool.data.degree = analyticsDataObj.degreeval || "";
        digitalData.product.tool.data.experience = analyticsDataObj.experience ||
            "";
        digitalData.product.tool.data.income = analyticsDataObj.takeHomeSalary ||
            "";
        digitalData.product.tool.data.loanStartYear = analyticsDataObj.startdate ||
            "";
        digitalData.product.tool.data.obligation = analyticsDataObj.totalemi || "";
        digitalData.product.tool.data.occupationType = analyticsDataObj.occupationType ||
            "";
        digitalData.product.tool.data.productCode = analyticsDataObj.productcode ||
            "";
        digitalData.product.tool.data.sanctionLoanAmount = analyticsDataObj.loanamount ||
            "";
        digitalData.product.tool.data.specialisation = analyticsDataObj.specialisationSelect ||
            "";
        digitalData.product.tool.data.typeOfBusiness = analyticsDataObj.industryType ||
            "";
        digitalData.product.tool.data.eligibilityAmount = analyticsDataObj.eligibilityAmount || "";

        _satellite.track("elegibility-calculate-now");
    } catch (e) {
        console.error(e)
    }
}

function triggerMotorRegnoFourWheelerMotorPlan(productName, registrationNo, mobileNumber, email, deDupe, registrationDate, city, vehicleDetails, manufacturingYear, renewal) {
    try {
        digitalData.product.name = productName || "";
        digitalData.product.data.registartionNumber = registrationNo || "";
        digitalData.product.data.mobileNumber = mobileNumber || "";
        digitalData.product.data.email = email || "",
            digitalData.product.data.deDupe = deDupe || "",
            digitalData.product.data.registrationDate = registrationDate || "",
            digitalData.product.data.city = city || "",
            digitalData.product.data.vehicleDetails = vehicleDetails || "",
            digitalData.product.data.manufacturingYear = manufacturingYear || "",
            digitalData.product.data.renewal = renewal || "";

        _satellite.track("motor-fw-get-quote-with-registration");

        console.log("this is motor trigger" + digitalData);
    } catch (e) {
        console.error(e)
    }
}

function triggerMotorRegnoTwoWheelerMotorPlan(productName, registrationNo, isPolicyExp, mobileNumber, email, deDupe, registrationDate, city, vehicleDetails, manufacturingYear, renewal) {
    try {
        digitalData.product.name = productName || "";
        digitalData.product.data.registartionNumber = registrationNo || "";
        digitalData.product.data.isPolicyExp = isPolicyExp || "";
        digitalData.product.data.mobileNumber = mobileNumber || "";
        digitalData.product.data.email = email || "",
            digitalData.product.data.deDupe = deDupe || "",
            digitalData.product.data.registrationDate = registrationDate || "",
            digitalData.product.data.city = city || "",
            digitalData.product.data.vehicleDetails = vehicleDetails || "",
            digitalData.product.data.manufacturingYear = manufacturingYear || "",
            digitalData.product.data.renewal = renewal || "";
        _satellite.track("motor-tw-get-quote-with-registration");

        console.log("this is motor trigger" + digitalData);
    } catch (e) {
        console.error(e)
    }
}

function triggerMotorFourWheelerSearchPlan(productName, registrationDate, city, vehicleDetails, manufacturingYear, mobileNumber, email) {
    try {

        digitalData.product.name = productName || "";
        digitalData.product.data.registrationDate = registrationDate || "";
        digitalData.product.data.city = city || "";
        digitalData.product.data.vehicleDetails = vehicleDetails || "";
        digitalData.product.data.manufacturingYear = manufacturingYear || "";
        digitalData.product.data.mobileNumber = mobileNumber || "";
        digitalData.product.data.email = email || "";

        _satellite.track("motor-fw-get-quote-without-registration");

        console.log("this is motor trigger" + digitalData);
    } catch (e) {
        console.error(e)
    }
}

function triggerMotorTwoWheelerSearchPlan(productName, registrationDate, city, vehicleDetails, manufacturingYear, isPolicyExp, mobileNumber, email) {
    try {

        digitalData.product.name = productName || "";
        digitalData.product.data.registrationDate = registrationDate || "";
        digitalData.product.data.city = city || "";
        digitalData.product.data.vehicleDetails = vehicleDetails || "";
        digitalData.product.data.manufacturingYear = manufacturingYear || "";
        digitalData.product.data.isPolicyExp = isPolicyExp || "";
        digitalData.product.data.mobileNumber = mobileNumber || "";
        digitalData.product.data.email = email || "";
        _satellite.track("motor-tw-get-quote-without-registration");

        console.log("this is motor trigger" + digitalData);
    } catch (e) {
        console.error(e)
    }
}

function triggerMotorFourWheelerPolicyExpired(productName) {
    try {

        digitalData.product.name = productName || "";
        _satellite.track("motor-isExpired");

        console.log("this is motor trigger" + digitalData);
    } catch (e) {
        console.error(e)
    }
}

function triggerThirdPartyMotorBuyNow(productName, variantCode, perimumAmount) {
    try {
        digitalData.product.name = productName || "";
        digitalData.product.data.variantCode = variantCode || "";
        digitalData.product.data.perimumAmount = perimumAmount || "";
        _satellite.track("third-party-buy-now");

    } catch (e) {
        console.error(e)
    }
}

function triggerMotorIDVConsideredEditStart() {
    try {
        _satellite.track("IDV-considered-edit-start");

    } catch (e) {
        console.error(e)
    }

}

function triggerMotorIDVConsideredEditEnd() {
    try {
        _satellite.track("IDV-considered-edit-end");

    } catch (e) {
        console.error(e)
    }
}

function triggerMotorRefineFirstNextCall(productName, variantCode, IDVRecommendedAmount, IDVConsideredAmount) {
    try {
        digitalData.product.name = productName || "";
        digitalData.product.data.variantCode = variantCode || "";
        digitalData.product.data.IDVRecommendedAmount = IDVRecommendedAmount || "";
        digitalData.product.data.IDVConsideredAmount = IDVConsideredAmount || "";

        _satellite.track("comp-insurance-firstNext-click");

    } catch (e) {
        console.error(e)
    }
}

function triggerMotorRefineSecondNextCall(productName, variantCode, IDVRecommendedAmount, IDVConsideredAmount) {
    try {
        digitalData.product.name = productName || "";
        digitalData.product.data.variantCode = variantCode || "";
        digitalData.product.data.IDVRecommendedAmount = IDVRecommendedAmount || "";
        digitalData.product.data.IDVConsideredAmount = IDVConsideredAmount || "";

        _satellite.track("comp-insurance-secondNext-click");

    } catch (e) {
        console.error(e)
    }
}


function triggerMotorIDVpolicyExpire(policyExpDate) {

    try {
        digitalData.product.data.policyExpDate = policyExpDate || "";
        //		_satellite.track("comp-insurance-policy-exp-date");

    } catch (e) {
        console.error(e)
    }
}

function triggerMotorIDVpolicyExpireEdit() {

    try {
        _satellite.track("comp-insurance-policy-exp-date-edit");

    } catch (e) {
        console.error(e)
    }
}

function triggerMotorIDVpolicyRenewal(policyExpDate) {

    try {
        digitalData.product.data.policyExpDate = policyExpDate || "";
        //	_satellite.track("comp-insurance-renewal-click");

    } catch (e) {
        console.error(e)
    }
}

function triggerMotorClaimInsurancetoggle() {
    try {
        _satellite.track("comp-insurance-claimInsurance-toggel");

    } catch (e) {
        console.error(e)
    }
}

function triggerMotorClaimInsuranceBonus(noClaimBonusPercentage) {
    try {
        digitalData.product.data.noClaimBonusPercentage = noClaimBonusPercentage || "";
        //	_satellite.track("comp-insurance-noClaimBonus");

    } catch (e) {
        console.error(e)
    }
}

function tiggerMotorComperhensiveBuyNow(productName, variantCode, premiumAmount, riderPlanVariantCode, riderPlanAmount) {

    try {
        digitalData.product.name = productName || "";
        digitalData.product.data.variantCode = variantCode || "";
        digitalData.product.data.perimumAmount = premiumAmount || "";
        digitalData.product.data.riderPlanVariantCode = riderPlanVariantCode || "";
        digitalData.product.data.riderPlanAmount = riderPlanAmount || "";
        _satellite.track("comp-insurance-buy-now");

    } catch (e) {
        console.error(e)
    }
}

function tiggerTwoWheelerMotorComperhensiveBuyNow(productName, variantCode, premiumAmount, riderPlanVariantCode, riderPlanAmount) {

    try {
        digitalData.product.name = productName || "";
        digitalData.product.data.variantCode = variantCode || "";
        digitalData.product.data.perimumAmount = premiumAmount || "";
        digitalData.product.data.riderPlanVariantCode = riderPlanVariantCode || "";
        digitalData.product.data.riderPlanAmount = riderPlanAmount || "";
        _satellite.track("comp-insurance-buy-now-2w");

    } catch (e) {
        console.error(e)
    }
}


function triggerThirdPartyMotorTwoWheelerBuyNow(productName, variantCode, premiumAmount) {
    try {
        digitalData.product.name = productName || "";
        digitalData.product.data.variantCode = variantCode || "";
        digitalData.product.data.perimumAmount = premiumAmount || "";
        _satellite.track("third-party-buy-now-2w");

    } catch (e) {
        console.error(e)
    }
}

/*Offer Trigger*/
function triggerOfferGenerateOtp(dateOfBirth, mobileno) {
    try {
        digitalData.product.data.dateOfBirth = dateOfBirth || "";
        digitalData.product.data.mobileno = mobileno || "";
        _satellite.track("my-offer-otp");

    } catch (e) {
        console.error(e)
    }
}



function triggerOfferSubmitButton(dateOfBirth, mobileno) {
    try {
        digitalData.product.data.dateOfBirth = dateOfBirth || "";
        digitalData.product.data.mobileno = mobileno || "";
        _satellite.track("my-offer-submit-click");

    } catch (e) {
        console.error(e)
    }
}


/*ULIP TRIGGER*/

function triggerUlipGetQuote(investedAmount, investmentTenure, proposerAge, lifeAssuredAge, gender, mobileNumber, riskscore, email) {
    try {

        digitalData.product.data.investedAmount = investedAmount || "";
        digitalData.product.data.investmentTenure = investmentTenure || "";
        digitalData.product.data.proposerAge = proposerAge || "";
        digitalData.product.data.lifeAssuredAge = lifeAssuredAge || "";
        digitalData.product.data.gender = gender || "";
        digitalData.product.data.mobileNumber = mobileNumber || "";
        digitalData.product.data.riskscore = riskscore || "";
        digitalData.product.data.email = email || "";
        _satellite.track("get-quote-click");
    } catch (e) {
        console.error(e)
    }
}


function triggerUlipDownloadBrochure(productName, variantCode) {
    try {
        //digitalData.product.data = {};
        digitalData.product.name = productName || "";
        digitalData.product.data.variantCode = variantCode || "";
        _satellite.track("download-brochure-click");

    } catch (e) {
        console.error(e)
    }
}



function triggerUlipfundAnalysis(productName, variantCode) {
    try {
        //digitalData.product.data = {};
        digitalData.product.name = productName || "";
        digitalData.product.data.variantCode = variantCode || "";
        _satellite.track("ulip-fund-analysis");

    } catch (e) {
        console.error(e)
    }
}

function triggerUlipfundDetails(productName, variantCode, fundCode) {
    try {
        //digitalData.product.data = {};
        digitalData.product.name = productName || "";
        digitalData.product.data.variantCode = variantCode || "";
        digitalData.product.data.fundCode = fundCode || "";
        _satellite.track("ulip-fund-details");

    } catch (e) {
        console.error(e)
    }
}

function triggerUlipfundAllocationStart(productName, variantCode, defaultFundAllocated) {
    try {

        digitalData.product.name = productName || "";
        digitalData.product.data.variantCode = variantCode || "";
        digitalData.product.data.defaultFundAllocated = defaultFundAllocated || "";
        _satellite.track("ulip-customize-allocation-start");

    } catch (e) {
        console.error(e)
    }
}

function triggerUlipfundAllocationComplete(productName, variantCode, finalFundAllocated) {
    try {

        digitalData.product.name = productName || "";
        digitalData.product.data.variantCode = variantCode || "";
        digitalData.product.data.finalFundAllocated = finalFundAllocated || "";
        _satellite.track("ulip-customize-allocation-complete");

    } catch (e) {
        console.error(e)
    }
}

function triggerUlipRiderDefaultStart(productName, variantCode, defaultRider) {
    try {

        digitalData.product.name = productName || "";
        digitalData.product.data.variantCode = variantCode || "";
        digitalData.product.data.defaultRider = defaultRider || "";
        _satellite.track("ulip-addrider-start");

    } catch (e) {
        console.error(e)
    }
}

function triggerUlipRiderComplete(productName, variantCode, finalRiderDetails) {
    try {

        digitalData.product.name = productName || "";
        digitalData.product.data.variantCode = variantCode || "";
        digitalData.product.data.finalRiderDetails = finalRiderDetails || "";
        _satellite.track("ulip-addrider-complete");

    } catch (e) {
        console.error(e)
    }
}

function triggerUlipBuyNow(productName, variantCode, policyTerm, PremiumPayingTerm, sumAssured) {
    try {
        //digitalData.product.data = {};
        digitalData.product.name = productName || "";
        digitalData.product.data.variantCode = variantCode || "";
        digitalData.product.data.policyTerm = policyTerm || "";
        digitalData.product.data.PremiumPayingTerm = PremiumPayingTerm || "";
        digitalData.product.data.sumAssured = sumAssured || "";
        _satellite.track("ulip-buy-now");

    } catch (e) {
        console.error(e)
    }
}


/*Contact us Analytics Trigger*/

function triggerContactUs(existingCustomer, productType, serviceType, subServiceType, policyNo, mobileNumber) {
    try {
        digitalData.product.data = {};
        digitalData.product.data.existingCustomer = existingCustomer || "";
        digitalData.product.data.productType = productType || "";
        digitalData.product.data.serviceType = serviceType || "";
        digitalData.product.data.subServiceType = subServiceType || "";
        digitalData.product.data.policyNo = policyNo || "";
        digitalData.product.data.mobileNumber = mobileNumber || "";
        _satellite.track("contact-us-form");

    } catch (e) {
        console.error(e)
    }
}

/*Create Lead Trigger From Call Us*/
function triggerCreateLead(applicationId, variantCode) {
    try {
        digitalData.product.data.applicationId = applicationId || "";
        digitalData.product.data.productCode = variantCode || "";
        _satellite.track("insurance-applicant-id");
    } catch (e) {
        console.error(e)
    }
}

/*Extra Health Care Analytics Trigger*/
function triggerHealthTopUpGetQuote(IndFam, insuredFor, mobileNumber, email) {
    try {
        digitalData.product.data = {},
            digitalData.product.data.IndFam = IndFam,
            digitalData.product.data.insuredFor = insuredFor,
            digitalData.product.data.mobileNumber = mobileNumber || "",
            digitalData.product.data.email = email || "",
            _satellite.track("health-topup-get-quote")
    } catch (e) {
        console.error(e)
    }
}

/*Digi Gold Buy Now Analytics Trigger*/
function triggerDigiGoldBuyNow(productName, currentPrice, buy, amount) {
    try {
        digitalData.product.data = {},
            digitalData.product.data.name = productName,
            digitalData.product.data.price = currentPrice,
            digitalData.product.data.unit = buy,
            digitalData.product.data.quantity = amount || "",
            _satellite.track("digi-gold-buy-now")
    } catch (e) {
        console.error(e)
    }
}

/*Digi Gold Sell Now Analytics Trigger*/
function triggerDigiGoldSellNow(productName, currentPrice, sell, amount) {
    try {
        digitalData.product.data = {},
            digitalData.product.data.name = productName,
            digitalData.product.data.price = currentPrice,
            digitalData.product.data.unit = sell,
            digitalData.product.data.quantity = amount || "",
            _satellite.track("digi-gold-sell-now")
    } catch (e) {
        console.error(e)
    }
}

/*Mutual Fund Invest Now Analytics Trigger*/
function triggerMFTopFundsInvestNow(productName, fundName) {
    try {
        digitalData.product.data = {},
            digitalData.product.data.name = productName,
            digitalData.product.data.FundName = fundName,
            _satellite.track("mf-topfunds-invest-now")
    } catch (e) {
        console.error(e)
    }
}

function triggerGPGPBuyNow(productCode, mobNo, existingDisability) {

    try {
        digitalData.product.data = {},
            digitalData.product.data.productCode = productCode,
            digitalData.product.data.mobileNumber = mobNo,
            digitalData.product.data.existingDisability = existingDisability,
            _satellite.track("gpgp-buy-now");
    } catch (e) {
        console.error(e);
    }

}
/*Application created Calls*/
function triggerToCreatApplication(applicantId, mobileNo, appStage, dob, trafficType) {
    try {
        digitalData.product.data.applicantId = applicantId,
            digitalData.product.data.applicationId = applicantId,
            digitalData.product.data.mobileNo = mobileNo,
            digitalData.product.data.appStage = appStage,
            digitalData.product.data.dob = dob,
            digitalData.product.data.trafficType = trafficType,
            digitalData.product.data.resumeAppStage = "",
            digitalData.product.data.resumePage = "",
            _satellite.track("spa-application-created")
    } catch (e) {
        console.error(e)
    }
} /*Resume Start/Complete Calls*/
function triggerToResumeCalls(applicantId, mobileNo, appStage, dob, trafficType, resumeAppStage, resumePage) {
    try {
        digitalData.product.data.applicantId = applicantId,
            digitalData.product.data.applicationId = applicantId,
            digitalData.product.data.mobileNo = mobileNo,
            digitalData.product.data.appStage = appStage,
            digitalData.product.data.dob = dob,
            digitalData.product.data.trafficType = trafficType,
            digitalData.product.data.resumeAppStage = resumeAppStage,
            digitalData.product.data.resumePage = resumePage,
            _satellite.track("application-resume-start-complete")
    } catch (e) {
        console.error(e)
    }
}
function compountCalculateNow(investmentAmount, noOfYears, rateOfReturn, lumpsumInvest) {
    try {
        digitalData.event = digitalData.event || {};
        digitalData.event.eventContext = digitalData.event.eventContext || {};
        digitalData.event.eventContext.investmentAmount = investmentAmount || "";
        digitalData.event.eventContext.noOfYears = noOfYears || "";
        digitalData.event.eventContext.rateOfReturn = rateOfReturn || "";
        digitalData.event.eventContext.lumpsumInvest = lumpsumInvest || "";
        _satellite.track('compound-intrest-calculate');
    } catch (err) {
        console.log(err);
    }
}

function bannerClick(bannerName) {
    try {
        digitalData.event = digitalData.event || {};
        digitalData.event.eventContext = digitalData.event.eventContext || {};
        digitalData.event.eventContext.bannerName = bannerName || "";
        _satellite.track('banner-click');
    } catch (err) {
        console.log(err);
    }
}

function ctaInteraction(ctaText, productId) {
    try {
        digitalData.event = digitalData.event || {};
        digitalData.event.eventContext = digitalData.event.eventContext || {};
        digitalData.product = digitalData.product || {};
        digitalData.event.eventContext.ctaText = ctaText || "";
        digitalData.product.productId = productId;
        _satellite.track('cta-click');
    } catch (err) {
        console.log(err);
    }
}

function caloriesCalculateNow(gender, age, activityLevel) {
    try {
        digitalData.event = digitalData.event || {};
        digitalData.event.eventContext = digitalData.event.eventContext || {};
        digitalData.event.eventContext.gender = gender || "";
        digitalData.event.eventContext.age = age || "";
        digitalData.event.eventContext.activityLevel = activityLevel || "";
        _satellite.track('calories-calculate');
    } catch (err) {
        console.log(err);
    }
}

function emiCalculatorApplyNow(loanAmount, tenure, rateOfIntrest) {
    try {
        digitalData.event = digitalData.event || {};
        digitalData.event.eventContext = digitalData.event.eventContext || {};
        digitalData.event.eventContext.loanAmount = loanAmount || "";
        digitalData.event.eventContext.tenure = tenure || "";
        digitalData.event.eventContext.roi = rateOfIntrest || "";
        _satellite.track('emi-calculator-applyNow');
    } catch (err) {
        console.log(err);
    }
}