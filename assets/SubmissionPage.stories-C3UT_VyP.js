import{z as d,b as e,o as u,s as t,kp as i,kq as c,H as s,kr as R,i as m,ks as E,kt as _,a0 as I,dG as S,k8 as O}from"./iframe--4PIu_qy.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-D673Xx4S.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-Bh8I1XH5.js";import"./useAccessRequirements-Cr13h6sL.js";import"./index-CSX6v4C9.js";import"./_baseOrderBy-DJeSI1T-.js";import"./_baseIteratee-SIQo37mB.js";import"./_baseMap-g_gQXiqC.js";import"./_baseEach-BxD8QyVu.js";import"./useInfiniteQuery-BFK5ZSa-.js";import"./groupBy-BwqOukAB.js";import"./_createAggregator-DZC-589T.js";import"./DialogBase-KOdTuKY_.js";import"./Close-Cka8SdIA.js";import"./HelpPopover-CDKz_QnM.js";import"./MarkdownPopover-CN870fqO.js";import"./LightTooltip-CM_IaFmM.js";import"./MarkdownSynapse-g98YneNH.js";import"./SkeletonButton-CbJBGnT-.js";import"./SkeletonInlineBlock-FN6COppS.js";import"./SkeletonTable-6mGZvVCs.js";import"./SkeletonParagraph-DjKVaY8f.js";import"./EntityLink-BeOo-rN3.js";import"./useEntity-D_kREN9m.js";import"./pickBy-C1osi4Ck.js";import"./isString-CD5owZVJ.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BHtkgNE4.js";import"./useGetEntityHeaders-BLRoxb3M.js";import"./EntityIcon-BTP7ny_8.js";import"./ErrorChip-Dyu16oaA.js";import"./Chip-DEb3tB_0.js";import"./UserOrTeamBadge-SQB9926a.js";import"./useUserGroupHeader-BLsJZNZM.js";import"./TeamBadge-DF4ycAVV.js";import"./UserBadge-CojLO1dw.js";import"./useUserBundle-D0IPmJJX.js";import"./MenuItem-B5CZnWag.js";import"./Card-Cck2UD4g.js";import"./UnmanagedACTAccessRequirementItem-CVPVZylc.js";import"./RequirementItem-ukf2cFGm.js";import"./LockTwoTone-BVqNO-zW.js";import"./ManagedACTAccessRequirementItemView-BWUJsj2O.js";import"./SelfSignAccessRequirementItem-CL5pM1JF.js";import"./DataAccessRequestAccessorsFilesForm-CEdhbS2S.js";import"./enums-Dm2Ak_pB.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-AU-0-k6V.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-D_6UloWG.js";import"./UserSearchBox-CeYjc1TM.js";import"./useDebouncedEffect-BmrRRhyl.js";import"./Autocomplete-Dbpmp649.js";import"./usePreviousProps-Bb46F9DU.js";import"./RadioGroup-RXFo-LWO.js";import"./Radio-DWXvjAoO.js";import"./SwitchBase-dr8cwp_f.js";import"./FormGroup-BjKs3M2W.js";import"./FormControlLabel-C7P4GXE_.js";import"./UploadDocumentField-BWj8zsGL.js";import"./FileUpload-CDf_g_Rp.js";import"./ManagedACTAccessRequirementFormWikiWrapper-B4VRlnXP.js";import"./GridLegacy-DlRYFgC7.js";import"./ResearchProjectForm-BepnGezr.js";import"./TextFieldWithWordLimit-CAt2u87C.js";import"./AuthenticatedRequirement-Ct2dN7Jr.js";import"./CertificationRequirement-CBrz18H9.js";import"./TwoFactorAuthEnabledRequirement-DMdWaMjU.js";import"./ValidationRequirement-DwvDW6V-.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-D4LDi5_B.js";import"./RejectDataAccessRequestModal-Dy-RS4mr.js";import"./CannedRejectionDialog-DNks6Lzu.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-hlwM9UyB.js";import"./Checkbox-M-8y5vkU.js";import"./Grid--R8W3G5l.js";import"./upperFirst-De4du87l.js";import"./_stringToArray-bsnBbIN_.js";const Je={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${R(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${E(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'SubmissionPage',
  loaders: [() => registerTableQueryResult({
    sql: \`SELECT * FROM \${REJECT_SUBMISSION_CANNED_RESPONSES_TABLE}\`
  }, mockRejectionReasonsTableQueryResultBundle)],
  parameters: {
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getWikiHandlers(MOCK_REPO_ORIGIN),
      // Return submission based on ID
      http.get(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, ({
        params
      }) => {
        const submission = mockSubmissions.find(submission => params.id === submission.id);
        return HttpResponse.json(submission, {
          status: 200
        });
      }),
      // Return a mocked access requirement
      http.get(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_BY_ID(':id')}\`, () => {
        return HttpResponse.json(mockManagedACTAccessRequirement, {
          status: 200
        });
      }), http.get(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_WIKI_PAGE_KEY(':id')}\`, () => {
        return HttpResponse.json({
          wikiPageId: 123,
          ownerObjectId: mockManagedACTAccessRequirement.id,
          ownerObjectType: 'ACCESS_REQUIREMENT'
        }, {
          status: 200
        });
      }), http.get<{
        id: string;
      }>(\`\${MOCK_REPO_ORIGIN}/repo/v1/accessRequirement/:id/acl\`, ({
        params
      }) => {
        return HttpResponse.json({
          id: params.id,
          creationDate: '2022-05-20T14:32:31.665Z',
          etag: 'f4fbd4f2-751d-40dd-9421-1d2693231217',
          resourceAccess: [{
            principalId: MOCK_USER_ID_2,
            accessType: ['REVIEW_SUBMISSIONS']
          }]
        }, {
          status: 200
        });
      }), ...getHandlersForTableQuery(MOCK_REPO_ORIGIN), http.put(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, async ({
        request
      }) => {
        return HttpResponse.json(await request.json(), {
          status: 201
        });
      })]
    }
  },
  args: {
    isReviewer: true,
    submissionId: 1
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Demo Error State',
  parameters: {
    msw: {
      handlers: [http.get(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, () => {
        const errorResponse: ErrorResponse = {
          reason: 'The user must be validated in order to review data access submissions.',
          concreteType: 'org.sagebionetworks.repo.model.ErrorResponse'
        };
        return HttpResponse.json(errorResponse, {
          status: 403
        });
      })]
    }
  },
  args: {
    isReviewer: true,
    submissionId: 9999
  }
}`,...n.parameters?.docs?.source}}};const Ve=["Demo","DemoError"];export{o as Demo,n as DemoError,Ve as __namedExportsOrder,Je as default};
