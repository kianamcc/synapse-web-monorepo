import{jJ as T}from"./iframe-i1vzbyyB.js";import{S as C}from"./SchemaDrivenAnnotationEditor-D1gak-8l.js";import"./index-r8ZA1smB.js";import"./useEntity-DlUlPmZB.js";import"./pickBy-BJ6lIa9n.js";import"./isString-Ce7Ri8wU.js";import"./_baseIteratee-BWFHBg8a.js";import"./useQueries-CBjjpUwX.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-Cp3zF6id.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DzQbuy3_.js";import"./useSchema-ByzjfETs.js";import"./index-Bz3IabUe.js";import"./enums-B8xGUC0s.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DkO-hquC.js";import"./uniq-BPWKJIgS.js";import"./forEach-B8iwwgef.js";import"./Grid-jDXwWxNI.js";import"./ListItem-X0ojJ6fs.js";import"./listItemButtonClasses-BYSPJK2B.js";import"./ListItemIcon-Culpyy9m.js";import"./MenuItem-tnFeCmzc.js";import"./ListItemText-DZ4p8CBk.js";import"./ArrowUpward-BH-JS8K7.js";import"./ContentCopy-X82IU-jV.js";import"./FormControlLabel-CF4egUKt.js";import"./Checkbox-CmnSISLK.js";import"./SwitchBase-gKvlxrU5.js";import"./FormGroup-DPlDi_rq.js";import"./RadioGroup-BjGaKkxo.js";import"./Radio-oSOPFJwQ.js";import"./Slider-4trPm8jg.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-CjCOKckI.js";import"./DialogBase-CnzJW4Vm.js";import"./Close-BcpwEnYM.js";import"./HelpPopover-D6TWnFMx.js";import"./MarkdownPopover-BjxGRa1i.js";import"./LightTooltip-DG7_ftuI.js";import"./MarkdownSynapse-ofrcwXhb.js";import"./SkeletonButton-BHwx8d5H.js";import"./SkeletonInlineBlock-CUOfhEKh.js";import"./SkeletonTable-B_XrK9-X.js";import"./SkeletonParagraph-CCi6Cu6y.js";import"./JsonSchemaForm-DBL8EdPN.js";import"./GridLegacy-DzxlY56w.js";import"./HelpTwoTone-BVYW7FMc.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./groupBy-D6TU_PwU.js";import"./_createAggregator-CYYsYhv7.js";import"./_baseMap-GgotyBlD.js";import"./DateTimePicker-BWhC4c2M.js";import"./useMobilePicker-xlXMjrt4.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-RZfMJBeU.js";import"./index-CEeSGOsu.js";import"./Chip-CnB9FDDp.js";import"./Tabs-Qz8EyJHQ.js";import"./KeyboardArrowRight-CTO4SPz3.js";import"./Autocomplete-DfOzTCpZ.js";import"./usePreviousProps-VLvW_37M.js";import"./use-deep-compare-effect.esm-DEN-S5AF.js";import"./TextWidget-CG_V4AmF.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Jr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-Arrays',
    entityId: 'syn25959281'
  }
}`,...(m=(a=r.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var c,d,y;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-IfThenElse'
  }
}`,...(y=(d=e.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var u,h,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    schemaId: 'nkauer-ad.main'
  }
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var S,l,A;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    entityId: 'syn32673093'
  }
}`,...(A=(l=o.parameters)==null?void 0:l.docs)==null?void 0:A.source}}};var f,v,I;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    entityId: 'syn25959288'
  }
}`,...(I=(v=n.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var E,q,b;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    validationSchema: {
      $schema: 'http://json-schema.org/draft-07/schema#',
      $id: \`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/\${mockSchemaBinding.jsonSchemaVersionInfo.$id}\`,
      type: 'object',
      properties: {
        country: {
          enum: ['USA', 'CA'],
          description: 'Test description for country property'
        },
        showStringArray: {
          type: 'boolean'
        }
      },
      required: ['country'],
      allOf: [{
        if: {
          properties: {
            country: {
              const: 'USA'
            }
          },
          required: ['country']
        },
        then: {
          properties: {
            state: {
              type: 'string'
            }
          },
          required: ['state']
        }
      }, {
        if: {
          properties: {
            country: {
              const: 'CA'
            }
          },
          required: ['country']
        },
        then: {
          properties: {
            province: {
              type: 'string'
            }
          },
          required: ['province']
        }
      }, {
        if: {
          properties: {
            showStringArray: {
              const: true
            }
          },
          required: ['showStringArray']
        },
        then: {
          properties: {
            stringArray: {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          }
        }
      }]
    }
  }
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};const Kr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Kr as __namedExportsOrder,Jr as default};
