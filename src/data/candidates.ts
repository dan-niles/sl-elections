// export type Candidate = {
// 	id: number;
// 	name: string;
// 	party: string;
// 	symbol: string;
// 	wiki: string | null;
// };

export interface Candidate {
	id: number;
	name: string;
	party: string;
	symbol: string;
	wiki: string | null;
}

export const CANDIDATES: Candidate[] = [
	{
		id: 1,
		name: "AKMEEMANA DAYARATHANA THERO",
		party: "IND1",
		symbol:
			"https://www.results.elections.gov.lk/assets/images/symbols/IND1.png",
		wiki: "https://www.parliament.lk/members-of-parliament/directory-of-members/viewMember/1523",
	},
	{
		id: 2,
		name: "ABUBAKAR MOHAMED INFAS",
		party: "DUA",
		symbol:
			"https://www.results.elections.gov.lk/assets/images/symbols/DUA.png",
		wiki: null,
	},
	{
		id: 3,
		name: "SIRIPALA AMARASINGHE",
		party: "IND2",
		symbol:
			"https://www.results.elections.gov.lk/assets/images/symbols/IND2.png",
		wiki: "https://www.parliament.lk/en/members-of-parliament/directory-of-past-members/viewMember/1422",
	},
	{
		id: 4,
		name: "K.K. PIYADASA",
		party: "IND4",
		symbol:
			"https://www.results.elections.gov.lk/assets/images/symbols/IND4.png",
		wiki: "https://www.parliament.lk/members-of-parliament/directory-of-members/viewMember/287",
	},
	{
		id: 5,
		name: "SARATH KEERTHIRATHNA",
		party: "IND5",
		symbol:
			"https://www.results.elections.gov.lk/assets/images/symbols/IND5.png",
		wiki: "hhttps://www.parliament.lk/members-of-parliament/directory-of-members/viewMember/3038",
	},
	{
		id: 6,
		name: "K.A. KULARATNA",
		party: "IND6",
		symbol:
			"https://www.results.elections.gov.lk/assets/images/symbols/IND6.png",
		wiki: "https://www.parliament.lk/members-of-parliament/directory-of-members/viewMember/78",
	},
	{
		id: 7,
		name: "K.R. KRISHAN",
		party: "APP",
		symbol:
			"https://www.results.elections.gov.lk/assets/images/symbols/APP.png",
		wiki: null,
	},
	{
		id: 8,
		name: "PALLIMULLA KAPUGAMAGE ANURA SIDNEY JAYARATHNA",
		party: "IND7",
		symbol:
			"https://www.results.elections.gov.lk/assets/images/symbols/IND7.png",
		wiki: "https://www.parliament.lk/en/members-of-parliament/directory-of-past-members/viewMember/229",
	},
	{
		id: 9,
		name: "DILITH JAYAWEERA",
		party: "SLCP",
		symbol:
			"https://www.results.elections.gov.lk/assets/images/symbols/SLCP.png",
		wiki: "https://en.wikipedia.org/wiki/Dilith_Jayaweera",
	},
	{
		id: 10,
		name: "SIRITUNGA JAYASURIYA",
		party: "USP",
		symbol:
			"https://www.results.elections.gov.lk/assets/images/symbols/USP.png",
		wiki: "https://en.wikipedia.org/wiki/Siritunga_Jayasuriya",
	},
	{
		id: 11,
		name: "MYLVAGANAM THILAKARAJAH",
		party: "IND8",
		symbol:
			"https://www.results.elections.gov.lk/assets/images/symbols/IND8.png",
		wiki: "https://en.wikipedia.org/wiki/M._Thilakarajah",
	},
	{
		id: 12,
		name: "AGAMPODI PRASANGA SURANJEEWA ANOJ DE SILVA",
		party: "DUNF",
		symbol:
			"https://www.results.elections.gov.lk/assets/images/symbols/DUNF.png",
		wiki: "https://en.wikipedia.org/wiki/Anoj_de_Silva",
	},
	{
		id: 13,
		name: "LALITH DE SILVA",
		party: "UNFF",
		symbol:
			"https://www.results.elections.gov.lk/assets/images/symbols/UNFF.png",
		wiki: "https://uom.lk/becon/staff/formerheads/prof-lalith-de-silvas-profile",
	},
	{
		id: 14,
		name: "AJANTHA DE ZOYSA",
		party: "RJA",
		symbol:
			"https://www.results.elections.gov.lk/assets/images/symbols/RJA.png",
		wiki: "https://www.parliament.lk/members-of-parliament/directory-of-members/viewMember/284",
	},
	{
		id: 15,
		name: "ANURA KUMARA DISSANAYAKE",
		party: "NPP",
		symbol:
			"https://www.results.elections.gov.lk/assets/images/symbols/NPP.png",
		wiki: "https://en.wikipedia.org/wiki/Anura_Kumara_Dissanayake",
	},
	{
		id: 16,
		name: "MAHINDA DEWAGE",
		party: "SLSP",
		symbol:
			"https://www.results.elections.gov.lk/assets/images/symbols/SLSP.png",
		wiki: null,
	},
	{
		id: 17,
		name: "ARIYANETHIRAN PAKKIYASELVAM",
		party: "IND9",
		symbol:
			"https://www.results.elections.gov.lk/assets/images/symbols/IND9.png",
		wiki: "https://en.wikipedia.org/wiki/P._Ariyanethiran",
	},
	{
		id: 18,
		name: "VICTOR PERERA",
		party: "IND10",
		symbol:
			"https://www.results.elections.gov.lk/assets/images/symbols/IND10.png",
		wiki: null,
	},
	{
		id: 19,
		name: "ANURUDDHA POLGAMPALA",
		party: "IND11",
		symbol:
			"https://www.results.elections.gov.lk/assets/images/symbols/IND11.png",
		wiki: "https://www.parliament.lk/members-of-parliament/directory-of-members/viewMember/1484",
	},
	{
		id: 20,
		name: "SAJITH PREMADASA",
		party: "SJB",
		symbol:
			"https://www.results.elections.gov.lk/assets/images/symbols/SJB.png",
		wiki: "https://en.wikipedia.org/wiki/Sajith_Premadasa",
	},
	{
		id: 21,
		name: "SARATH FONSEKA",
		party: "IND12",
		symbol:
			"https://www.results.elections.gov.lk/assets/images/symbols/IND12.png",
		wiki: "https://en.wikipedia.org/wiki/Sarath_Fonseka",
	},
	{
		id: 22,
		name: "DISSANAYAKA MUDIYANSELAGE BANDARANAYAKE",
		party: "IND13",
		symbol:
			"https://www.results.elections.gov.lk/assets/images/symbols/IND13.png",
		wiki: "https://www.parliament.lk/en/members-of-parliament/directory-of-members/viewMember/292/",
	},
	{
		id: 23,
		name: "SARATH BANDARANAYAKE",
		party: "NDF",
		symbol:
			"https://www.results.elections.gov.lk/assets/images/symbols/NDF.png",
		wiki: null,
	},
	{
		id: 24,
		name: "BATHTHARAMULLE SEELARATHANA THERO",
		party: "JSP",
		symbol:
			"https://www.results.elections.gov.lk/assets/images/symbols/JSP.png",
		wiki: null,
	},
	{
		id: 25,
		name: "NUWAN BOPEGE",
		party: "SPF",
		symbol:
			"https://www.results.elections.gov.lk/assets/images/symbols/SPF.png",
		wiki: null,
	},
	{
		id: 26,
		name: "SARATH MANAMENDRA",
		party: "NSU",
		symbol:
			"https://www.results.elections.gov.lk/assets/images/symbols/NSU.png",
		wiki: null,
	},
	{
		id: 27,
		name: "PEMASIRI MANAGE",
		party: "IND14",
		symbol:
			"https://www.results.elections.gov.lk/assets/images/symbols/IND14.png",
		wiki: "https://www.parliament.lk/members-of-parliament/directory-of-members/viewMember/1443",
	},
	{
		id: 28,
		name: "ANURUDDHA ROSHAN RANASINGHE",
		party: "IND15",
		symbol:
			"https://www.results.elections.gov.lk/assets/images/symbols/IND15.png",
		wiki: "https://en.wikipedia.org/wiki/Roshan_Ranasinghe",
	},
	{
		id: 29,
		name: "JANAKA RATNAYAKE",
		party: "ELPP",
		symbol:
			"https://www.results.elections.gov.lk/assets/images/symbols/ELPP.png",
		wiki: "https://en.wikipedia.org/wiki/Janaka_Ratnayake",
	},
	{
		id: 30,
		name: "NAMAL RAJAPAKSHA",
		party: "SBP",
		symbol:
			"https://www.results.elections.gov.lk/assets/images/symbols/SBP.png",
		wiki: null,
	},
	{
		id: 31,
		name: "NAMAL RAJAPAKSA",
		party: "SLPP",
		symbol:
			"https://www.results.elections.gov.lk/assets/images/symbols/SLPP.png",
		wiki: "https://en.wikipedia.org/wiki/Namal_Rajapaksa",
	},
	{
		id: 32,
		name: "WIJEYADASA RAJAPAKSHE",
		party: "JPF",
		symbol:
			"https://www.results.elections.gov.lk/assets/images/symbols/JPF.png",
		wiki: "https://en.wikipedia.org/wiki/Wijeyadasa_Rajapakshe",
	},
	{
		id: 33,
		name: "A.S.P. LIYANAGE",
		party: "SLLP",
		symbol:
			"https://www.results.elections.gov.lk/assets/images/symbols/SLLP.png",
		wiki: "https://en.wikipedia.org/wiki/A._S._P._Liyanage",
	},
	{
		id: 34,
		name: "KEERTHIE WICKRAMARATNE",
		party: "AJP",
		symbol:
			"https://www.results.elections.gov.lk/assets/images/symbols/AJP.png",
		wiki: null,
	},
	{
		id: 35,
		name: "PRIYANTHA WICKRAMASINGHE",
		party: "NSSP",
		symbol:
			"https://www.results.elections.gov.lk/assets/images/symbols/NSSP.png",
		wiki: null,
	},
	{
		id: 36,
		name: "RANIL WICKREMESINGHE",
		party: "IND16",
		symbol:
			"https://www.results.elections.gov.lk/assets/images/symbols/IND16.png",
		wiki: "https://en.wikipedia.org/wiki/Ranil_Wickremesinghe",
	},
	{
		id: 37,
		name: "PANI WIJESIRIWARDENA",
		party: "SEP",
		symbol:
			"https://www.results.elections.gov.lk/assets/images/symbols/SEP.png",
		wiki: null,
	},
	{
		id: 38,
		name: "OSHALA HERATH",
		party: "NIF",
		symbol:
			"https://www.results.elections.gov.lk/assets/images/symbols/NIF.png",
		wiki: null,
	},
];
