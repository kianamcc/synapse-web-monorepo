import{g as u,k as d,n as t,a3 as c,dP as R,b as e,kr as i,ks as E,H as s,kt as _,p as m,ku as I,kv as S,ka as O}from"./iframe-B232wCNe.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-PmVWJFhS.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-Bt7uWO9_.js";import"./useAccessRequirements-B_dVYCbZ.js";import"./index-B8EHcCSt.js";import"./_baseOrderBy-ATaEyx6N.js";import"./_baseIteratee-DYtHAtdK.js";import"./_baseMap-lOtKvTec.js";import"./_baseEach-BXg_PS_g.js";import"./useInfiniteQuery-DWrZvRU-.js";import"./groupBy-9_jLD9Jy.js";import"./_createAggregator-D53t2TpJ.js";import"./DialogBase-CdGKFNop.js";import"./Close-B-DQ6RtW.js";import"./HelpPopover-0TadkfCC.js";import"./MarkdownPopover-DhG8HMhS.js";import"./LightTooltip-krKtsD_O.js";import"./MarkdownSynapse-C0MRPwg8.js";import"./SkeletonButton-BFqV1Bjq.js";import"./SkeletonInlineBlock-B1yQCAbt.js";import"./SkeletonTable-DsTP05oa.js";import"./SkeletonParagraph-D6S7cLaW.js";import"./EntityLink-DKoTHkmn.js";import"./useEntity-C8RzoBC_.js";import"./pickBy-Cjq_BC74.js";import"./isString-BlP-ka-y.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Cwq6kYV5.js";import"./useGetEntityHeaders-BvUM1q18.js";import"./EntityIcon-4cVck1RH.js";import"./ErrorChip-BLBw-21D.js";import"./Chip-C9IsdVPl.js";import"./UserOrTeamBadge-CCBQdta7.js";import"./UserBadge-p8iKlC6M.js";import"./useUserBundle-CeFUDuAK.js";import"./MenuItem-G0IpQDVS.js";import"./Card-mT5-QQz8.js";import"./TeamBadge-Ca543jzl.js";import"./UnmanagedACTAccessRequirementItem-DvmoEr33.js";import"./RequirementItem-DTfI6Tm7.js";import"./LockTwoTone-DEb61BCj.js";import"./UserSearchBoxV2-C_4wqn6m.js";import"./useDebouncedEffect-CpjoW1QH.js";import"./use-deep-compare-effect.esm-Bo67Fp7r.js";import"./uniq-DqbaCJ0V.js";import"./without-Bb3YqdBe.js";import"./Select-aab027f3.esm-D24vByKR.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-Byi2e4cu.js";import"./SelfSignAccessRequirementItem-CBlpMn5E.js";import"./DataAccessRequestAccessorsFilesForm-D2BsqAiC.js";import"./enums-C2yvHSEc.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-xzdvJmRA.js";import"./RadioGroup-BkXW_uD_.js";import"./Radio-CVXIYRhT.js";import"./SwitchBase-DmbjsDrX.js";import"./FormGroup-uVltTTxV.js";import"./FormControlLabel-9kWwTU5c.js";import"./UploadDocumentField-DWE6LC4V.js";import"./FileUpload-DXrqguOk.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BzgwIilX.js";import"./GridLegacy-DNb-3HYN.js";import"./ResearchProjectForm-dMsjGhhF.js";import"./TextFieldWithWordLimit-4edrVmDL.js";import"./AuthenticatedRequirement-CGWbvBy2.js";import"./CertificationRequirement-Ew_Rb0Bz.js";import"./TwoFactorAuthEnabledRequirement-CxIgJROo.js";import"./ValidationRequirement-ZQrGevYL.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-uDtNZ8sd.js";import"./RejectDataAccessRequestModal-CC7EA5Fd.js";import"./CannedRejectionDialog-DF2vGw6R.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-BvIFxS0n.js";import"./Checkbox-BjOsasGy.js";import"./Grid-Bt4fsCKY.js";import"./upperFirst-CyMBg5h5.js";import"./_stringToArray-BWQ6F6_z.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Ze=["Demo","DemoError"];export{o as Demo,n as DemoError,Ze as __namedExportsOrder,Ve as default};
