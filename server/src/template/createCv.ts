import {
  AlignmentType,
  Document,
  HeadingLevel,
  Paragraph,
  TabStopPosition,
  TabStopType,
  TextRun,
} from "docx";
import { Project, infoUser, education, experiences, formCv } from "../interface/interfaces";

export class DocumentCreator {
  //tslint:disable-next-line:typedef
  public create([experiences, educations, skills, languages, infoUser, projects, tools, db]:any): Document {
    console.log({infoUser});
    
    const document = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              text: infoUser.name,
              heading: HeadingLevel.TITLE
            }),
            
            new Paragraph({
              children:[
                new TextRun({
                  text: infoUser.stack,
                  size:28
                })
              ]
            }),
            this.createContactInfo(infoUser),
            new Paragraph({
              text:infoUser.about,
              alignment:AlignmentType.JUSTIFIED
            }),
    //projects
            this.createHeading("Proyectos"),
            ...projects
              .map(
                (project: Project) => {
                  const arr: Paragraph[] = [];
                  arr.push(
                    this.createInstitutionHeader(
                      `${project.area} - ${project.title}`,
                      `${project.startDate.year} - ${project.endDate.year}`
                    )
                  );
                  arr.push(
                    this.createRoleText(
                      `${project.company}`
                    )
                  );
                  const bulletPoints = this.splitParagraphIntoBullets(
                    project.summary
                  );
                  bulletPoints?.forEach((bulletPoint) => {
                    arr.push(this.createBullet(bulletPoint));
                  });
                  project.link.length&&
                  arr.push(
                    new Paragraph(
                      `Repositorio: ${project.link}`
                    )
                  );
                  return arr;
                }
              )
              .reduce(
                (prev: string | any[], curr: any) => prev.concat(curr),
                []
              ),
            this.createHeading("Experience"),
            ...experiences
              .map(
                (experience: experiences) => {
                  const arr: Paragraph[] = [];

                  arr.push(
                    this.createInstitutionHeader(
                      experience.company,
                      this.createPositionDateText(
                        experience.startDate,
                        experience.endDate,
                        experience.isCurrent
                      )
                    )
                  );
                  arr.push(this.createRoleText(experience.title));

                  experience.achievement?.forEach((bulletPoint) => {
                    arr.push(this.createBullet(bulletPoint));
                  });

                  return arr;
                }
              )
              .reduce(
                (prev: string | any[], curr: any) => prev.concat(curr),
                []
              ),
              this.createHeading("Educación"),
              ...educations
                .map(
                  (education: education) => {
                    const arr: Paragraph[] = [];
                    arr.push(
                      this.createInstitutionHeader(
                        education.schoolName,
                        `${education.startDate.year} - ${education.endDate.year}`
                      )
                    );
                    arr.push(
                      this.createRoleText(
                        `${education.fieldOfStudy} - ${education.degree}`
                      )
                    );
                  
                    education.notes.forEach((bulletPoint) => {
                      arr.push(this.createBullet(bulletPoint));
                    });
                    return arr;
                  }
                )
                .reduce(
                  (prev: string | any[], curr: any) => prev.concat(curr),
                  []
                ),
            this.createHeading("Tecnologías, idiomas"),
            this.createTextRun("Tecnologías"),
            this.createList(skills),
            this.createList(db),
            this.createList(tools),
            this.createTextRun("idiomas"),
            this.createList(languages),
          ],
        },
      ],
    });
    return document;
  }

  public createContactInfo({
    phoneNumber,
    profileUrl,
    email,
    Address
  }:infoUser
  ): Paragraph {
    return new Paragraph({
      alignment: AlignmentType.CENTER,
      thematicBreak: true,
      children: [
        new TextRun(
          `Mobile: ${phoneNumber} | LinkedIn: ${profileUrl} | Email: ${email}`
        ),
        new TextRun({
          text: `Dirección: ${Address}`,
          break: 1,
        }),
      ],
    });
  }


  public createTextRun(text: string): Paragraph {
    return new Paragraph({
      children:[
        new TextRun({
          text: text,
          size:30
        })
      ]
    });
  }
  

  public createHeading(text: string): Paragraph {
    return new Paragraph({
      text: text,
      heading: HeadingLevel.HEADING_1,
      thematicBreak: true,
    });
  }

  public createSubHeading(text: string): Paragraph {
    return new Paragraph({
      text: text,
      heading: HeadingLevel.HEADING_2,
    });
  }

  public createInstitutionHeader(
    institutionName: string,
    dateText: string
  ): Paragraph {
    return new Paragraph({
      tabStops: [
        {
          type: TabStopType.RIGHT,
          position: TabStopPosition.MAX,
        },
      ],
      children: [
        new TextRun({
          text: institutionName,
          bold: true,
        }),
        new TextRun({
          text: `\t${dateText}`,
          bold: true,
        }),
      ],
    });
  }

  public createRoleText(roleText: string): Paragraph {
    return new Paragraph({
      children: [
        new TextRun({
          text: roleText
        }),
      ],
    });
  }

  public createBullet(text: string): Paragraph {
    return new Paragraph({
      text: text,
      bullet: {
        level: 0,
      },
    });
  }

  // tslint:disable-next-line:no-any
  public createList(skills: any[]): Paragraph {
    return new Paragraph({
      children: [
        new TextRun(skills.length?skills.map((skill) => skill.name).join(", ") + ".":"")
      ],
    });
  }


  public splitParagraphIntoBullets(text: string): string[] {
    console.log(text);
    
    return text.split("\n\n");
  }

  public createPositionDateText(
    startDate: any,
    endDate: any,
    isCurrent: boolean
  ): string {

    const startDateText = this.getMonthFromInt(startDate?.month) + ". " + startDate?.year;
    const endDateText = isCurrent
      ? "Actual"
      : `${this.getMonthFromInt(endDate?.month)}. ${endDate?.year}`;
    return `${startDateText} - ${endDateText}`;
  }

  public getMonthFromInt(value: number): string {
    switch (value) {
      case 1:
        return "Jan";
      case 2:
        return "Feb";
      case 3:
        return "Mar";
      case 4:
        return "Apr";
      case 5:
        return "May";
      case 6:
        return "Jun";
      case 7:
        return "Jul";
      case 8:
        return "Aug";
      case 9:
        return "Sept";
      case 10:
        return "Oct";
      case 11:
        return "Nov";
      case 12:
        return "Dec";
      default:
        return "N/A";
    }
  }
}
