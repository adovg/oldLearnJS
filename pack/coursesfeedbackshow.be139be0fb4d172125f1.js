var coursesFeedbackShow = webpackJsonp_name_([ 21 ], {
123: function(e, t, a) {
var n = {
"cert/en.yml": 125,
"cert/ru.yml": 126,
"email/en.yml": 127,
"email/ru.yml": 128,
"en.yml": 129,
"frontpage/en.yml": 130,
"frontpage/ru.yml": 131,
"groups/en.yml": 132,
"groups/ru.yml": 133,
"models/en.yml": 134,
"models/ru.yml": 135,
"ru.yml": 136,
"teacher/en.yml": 137,
"teacher/ru.yml": 138
};
function i(e) {
return a(o(e));
}
function o(e) {
var t = n[e];
if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
return t;
}
i.keys = function() {
return Object.keys(n);
}, i.resolve = o, e.exports = i, i.id = 123;
},
125: function(e, t) {
e.exports = {
line1: "This is to certify that from #{dateStart} to #{dateEnd}",
line2: "has completed the course",
no_user: "There is no such user",
no_participant: "There is no such participant"
};
},
126: function(e, t) {
e.exports = {
line1: "Настоящим удостоверяется, что с #{dateStart} по #{dateEnd}",
line2: "прошёл(а) обучение по программе",
no_user: "Нет такого пользователя",
no_participant: "Нет такого участника"
};
},
127: function(e, t) {
e.exports = {
invite: {
invitation: "Course invitation",
seat_has_been_reserved: "Registration for course was created on javascript.info #{title}.",
click_to_join: 'Click on link <a href="#{link}">#{link}</a>, for joining the group.',
auto_login: "You will be automatically signed in on the website then.",
contact_person: "Contact person indicated in Registration: #{name}.",
questions: "In case of any questions – you can always reply to this email."
},
invite_remind: {
title: "Please join the group",
hello: "Hello!",
still_not_joined: "You are in the participants' list but haven't join the group #{title} yet.",
join_for: "It is neccessary for you to take part and receive materials.",
click_to_join: 'You can join the group by following the link <a href="#{link}">#{link}</a>.',
questions: "In case of any questions – you can always reply to this email."
},
materials: {
title: "Notifications on course materials",
materials_added: 'Materials have been added to the page <a href="#{link}">#{link}</a>.',
click_to_download: 'You can download the file by direct link (only if you are signed in): <a href="#{fileLink}">#{fileTitle}</a>.'
},
move: {
title: "Notification about transfer",
hello: "Hello!",
you_were_moved: 'You have been transferred from "#{oldGroup}" to "#{newGroup}".',
questions: "In case of any questions – you can always reply to this email."
},
order_cancel: {
title: "Your order #{number} has been cancelled due to time expiry",
order_cancelled: "Your order on JavaScript.info with number #{number} has been cancelled automatically.",
group_start_soon: "&nbsp;due to soon courses beginning and absence of payment information.",
payment_expired: "&nbsp;due to time expiry and absence of payment information.",
duplicate: "You have another order #{number} to the same group which has been already payed, so duplicate order was cancelled.",
list_orders: "List of active order is available in your account:&nbsp;",
need_login: "&nbsp;(you need to be signed in).",
already_payed_or_soon: "If you have payed for this order or are planning to do it today — please reply to this email.",
already_payed: "If you have payed for this order or are planning to do it — please reply to this email.",
info: "Automatic cancellation of unpayed order is for removing unactive orders."
},
payment_confirmation: {
title: "Payment confirmation",
payment_confirmed: "We confirm payment receipt for order #{number}.",
participation_confirmed: "Your registration is approved.",
free_participation: "Your registration without payment is approved.",
no_participants: 'You did not select participants. You can do it in section <a href="#{profileOrdersUrl}">Orders</a> in your account, in order details.',
is_participant: 'Follow the link <a href="#{orderUserInviteLink}">#{orderUserInviteLink}</a> to join the group.',
confirmation_email: "Participants invited by you will receive email as well from orders@javascript.info.",
questions: "In case of any questions – you can always reply to this email."
}
};
},
128: function(e, t) {
e.exports = {
invite: {
invitation: "Приглашение на курс",
seat_has_been_reserved: "На сайте javascript.ru была оформлена запись для вас на курс #{title}.",
click_to_join: ' Перейдите по ссылке <a href="#{link}">#{link}</a>, чтобы присоединиться к группе.',
auto_login: "При этом вы автоматически будете залогинены на сайте.",
contact_person: "Контактное лицо, указанное в записи: #{name}.",
questions: "Если возникнут какие-либо вопросы – вы всегда можете ответить на это письмо."
},
invite_remind: {
title: "Присоединитесь, пожалуйста, к группе",
hello: "Здравствуйте!",
still_not_joined: "Вы – в списке участников, но до сих пор не присоединились к группе #{title}.",
join_for: "Это нужно сделать, чтобы вы могли участвовать и получать материалы группы.",
click_to_join: 'Присоединиться к группе можно по ссылке <a href="#{link}">#{link}</a>.',
questions: "Если возникнут какие-либо вопросы – вы можете ответить на это письмо."
},
materials: {
title: "Уведомление о материалах курса",
materials_added: 'На страницу <a href="#{link}">#{link}</a> добавлены материалы.',
click_to_download: 'Вы можете скачать файл по прямой ссылке (если залогинены на сайте): <a href="#{fileLink}">#{fileTitle}</a>.'
},
move: {
title: "Оповещение о переводе",
hello: "Здравствуйте!",
you_were_moved: 'Вы были переведены из группы "#{oldGroup}" в группу "#{newGroup}".',
questions: "Если возникнут какие-либо вопросы – вы можете ответить на это письмо."
},
order_cancel: {
title: "Ваш заказ #{number} аннулирован по истечению времени",
order_cancelled: "Ваш заказ на Javascript.ru под номером #{number} автоматически аннулирован",
group_start_soon: "&nbsp;в связи со скорым началом обучения, ввиду отсутствия информации о платеже.",
payment_expired: "&nbsp;по истечению времени ожидания, ввиду отсутствия информации о платеже.",
duplicate: "У вас есть другой, оплаченный, заказ под номером #{number} в ту же группу, так что, вероятно, аннулирован лишний, дублирующий, заказ.",
list_orders: "Список активных заказов доступен в личном кабинете:&nbsp;",
need_login: "&nbsp;(нужно авторизоваться на сайте).",
already_payed_or_soon: "Если вы оплачивали этот заказ или собираетесь это сделать сегодня – ответьте на это письмо.",
already_payed: "Если вы оплачивали этот заказ или собираетесь это сделать – ответьте на это письмо.",
info: "Автоматическая отмена неоплаченных заказов предназначена для удаления несостоявшихся заказов."
},
payment_confirmation: {
title: "Подтверждение оплаты",
payment_confirmed: "Подтверждаем получение оплаты за заказ #{number}.",
participation_confirmed: "Ваша запись одобрена",
free_participation: "Ваша запись без оплаты одобрена.",
no_participants: 'Вы не указали участников. Это можно сделать в разделе учётной записи <a href="#{profileOrdersUrl}">Заказы</a>, в деталях заказа.',
is_participant: 'Перейдите по ссылке <a href="#{orderUserInviteLink}">#{orderUserInviteLink}</a>, чтобы присоединиться к группе.',
confirmation_email: "Приглашённые вами участники также получат письмо на электронную почту с предложением присоединиться. Письмо придёт с адреса orders@javascript.ru.",
questions: "Если возникнут какие-либо вопросы – вы всегда можете ответить на это письмо."
}
};
},
129: function(e, t) {
e.exports = {
feedback: " Feedback on the courses\n #{title}",
by_user: {
title: "Course description",
info: "Environment setting instructions",
slack_logs: "Slack chat logs",
jb: "Discount for Jetbrains editors",
ical: "Schedule in iCal format",
materials: "Learning materials",
participants: "Participants’ forms",
participants_json: "Participants’ JSON (for CORS)"
},
group_feedback_list: {
plural_feedback: " feedback,feedbacks,feedbacks"
},
group_feedback_edit: {
no_participant: "Only group participants can leave feedback.",
no_rights: "Insufficient rights",
title: "Feedback",
public_feedback: "Your feedback has been saved successfully. You can share it in social networks.",
private_feedback: "Your feedback has been saved successfully. Only we can see it.",
rate_course: "Please rate this course.",
missing_feedback_text: "You forgot to write the feedback."
},
group_feedback_show: {
private_feedback: "Private feedback",
title: "Feedback",
head_title: "Feedback on",
comment_saved: "Comment has been saved",
comment_save_error: "Comment has not been saved",
edit: "Edit"
},
group_finish: "Group #{title} has completed the course successfully.",
group_materials: {
title: "Learning materials",
added_with_notifications: "The material has been added, notifications have been sent.",
added_wo_notifications: "The material has been added, notifications have NOT been sent.",
email_subject: "New course materials have been added",
remove_file: "Remove file",
file_removed: "The file has been deleted.",
settings_saved: "The setting has been saved."
},
group_materials_download: {
invalid_link: "Invalid link. Probably, this material has been added by mistake and later deleted by the teacher."
},
group_slack_invite: {
no_target: "Neither a participant and nor a teacher",
no_slack_user: 'This user is not registered in Slack. At first, register in <a href="#{slack_url}">#{slack_url}</a> with email #{email}.',
user_added: "User #{email} has been added to slack channel #{groupSlug}."
},
participants: {
data_updated: "This data has been updated.",
fix_errors: "Please fix errors."
},
invite: {
order: "Order #{order}",
success: "Congratulations, you have joined the course. Below, next to the course, you will find the instruction.",
already_accepted_title: "Invitation has already been accepted",
already_accepted: "This invitation has already been accepted. Log in to the account of the course participant.",
outdated_link_title: "Outdated link",
outdated_link: 'Sorry, this link is outdated. If you have any questions, please send them to <a href="mailto:#{email}">#{email}</a>',
already_added: "You are course participant already. Below, next to the course, you will find the instruction.",
choose_country: " choose country ",
form_title: "Participant’s form"
},
signup: {
title: "Order No. #{order}",
amount: "Cost",
no_such_group: "There is no such group.",
signup_finished_title: "Sign up for this group is finished",
signup: "Sign up for the course",
signup_finished: 'Sign up for this group is finished. Go to <a href="/courses/#{slug}">the course page</a> to see groups open for sign up.',
signup_title: "Sign up\n #{title}",
tutorial: "Tutorial",
courses: "Courses",
choose_group: "Choose a group, please.",
plural_human: "person,persons,persons",
receiptTitle: "Participation in the course for #{count} #{people}",
email_subject: "Order #{order}",
payment_failed: "Payment has not been proceed, please try again.",
questions: 'For any questions regardin payment please send email to <a href="mailto:#{ordersMail}">#{ordersMail}</a>.',
contact_info: "Contact information:",
payment: "Payment:",
payment_succeed: "Succeed",
payment_pending: "Waiting for been confirmed",
thanks_for_order: "Thanks for the order!",
confirmation: "Confirmation will be received soon at #{email}",
click_to_join_group: 'Please go to section <a href="#{url}/courses">Courses</a> in your account for joining the group.',
edit_participants: 'Editing information of other participants is available in the section <a href="#{url}/orders">Orders</a> of you account. They will also receive notifications.',
questions_after: 'If you have any questions, please send them to <a href="mailto:#{email}">#{email}</a>',
teacher: "Teacher",
seats_pluralize: "seat,seats,seats",
seats_left: "#{seats} #{seats_pluralized} left",
seats_limited: "Seats are limited",
signup_button: "Signup",
subscribe: "Subscribe",
subscribe_other: [ "Also you can", "request notifications", "about new groups of this course" ],
confirmation_email: "Confirmation email with program details and dates will be send to your email.",
this_course: "This course is",
conducted_plural: "conducted by:",
conducted_single: "conducted by:"
},
feedback_loader: {
no_feedback: "No feedbacks yet."
},
photo_load_widget: {
wrong_format: "Wrong file type or image has been damaged."
},
participant_item: {
participant: "Participant",
invalid_email: "Enter valid email"
},
comment_form: {
submit: "Publish",
cancel: "Cancel"
},
admin: {
no_such_order: "No such order.",
no_such_group: "No such group",
no_such_file: "No such file",
transfer_participant: "You have been transfered to new group #{title}",
transfer_succeed_notified: "Transfer has been finished, notification has been sent.",
transfer_succeed_not_notified: "Transfer has been finished, notification has NOT been sent.",
participant_deducted: "Participant has been deducted: #{email}",
document_uploaded: "Manager has been attached documents to the order: #{order}"
},
course: {
code_discount: "Discount has been provided by code"
},
patch: {
information_updated_notified: "Information has been updated invitations have been sent to: #{emails}.",
information_updated_not_notified: "Information about participants has been updated."
},
chat_logs: {
title: "Group chat logs",
timeframe_from: "Timeframe from",
timeframe_to: "to",
apply: "Apply"
},
contacts: {
title: "Contact information",
note: "Leave your contact details so that we can contact you     if necessary",
name_surname: "Name and surname:",
phone: "Phone number:",
data_secured: "You personal data is secure",
personal_info: "No your personal data     will not be given to third parties, except at your request or for     objectives of the contract concluded with you.",
save_and_continue: "Save and continue"
},
grayed_list: {
contact_info: "Contact information",
payment: "Payment",
confirmation: "Confirmation"
},
participant_register: {
title: "Seats and participants",
participants_count: "Participants count",
only_one_place: "Sorry, there is only one seat left",
enter_count: "enter count from 1 to #{max}",
already_participant: "I am already participant",
no: "NO",
yes: "YES",
amount: "Total amount",
add_participants: "Add participants",
add_later: "(it could be done later)",
save_and_continue: "Save and continue"
},
payment: {
title: "Payment",
do_not_pay_twice: "Do not pay twice. Change payment method only if you know that payment has not been proceed.",
terms_accept: 'By registering for courses, you agree to the <a href="../offer.ru.pdf" target="_blank">contract of offer</a>.',
questions: 'If you have any questions, please send them to <a href="#{ordersMail}">#{ordersMail}</a>.',
goto_payment: "Go to payment"
},
participant_info: {
country: "Country",
city: "City",
about_link: "Link to profile",
occupation: "Occupation",
purpose: "What is your purpose of participating this course?",
wishes: "You wishes of this course"
},
guarantee: {
title: "Guarantee",
description: "<p>If you don't like our course for any reason, you can get money back.</p>\n<p>Let us know during the first week of the course, and then your participation will cease and you get a full refund.</p>\n"
},
additional_information: "Additional information",
back_to_all: "All courses",
create_order: {
recording_finished: "This group is full, sorry.",
no_seats: "We're sorry, this group is out of seats already.",
seats_limit: "We're sorry, there are no so many seats. Please decrease the number of seats to #{max}.",
no_contact_person: "No contact person.",
no_participants: "No participants.",
not_authorized: "You're not authorized.",
title_check_prefix: "Learning at the course:",
payment_for: "Payment for"
},
invite_email_subject: "Invite to join the course #{group}",
invite_remind_email_subject: "#{group} – you didn't join the group",
request_notification: "Request a notification:"
};
},
130: function(e, t) {
e.exports = {
title: "JavaScript courses",
description: 'Here we make "live" courses on professional JavaScript with professional developers as teachers of how to think in JavaScript, write in a simple, fast and efficient manner.\n',
opened_courses: "Go to the list of upcoming courses",
people_talk_about: "Feedback on the courses",
features: [ {
name: "quality",
title: "Quality",
text: "It’s the essential part. We learn development at a high professional standard"
}, {
name: "online",
title: "Live webinars",
text: "Learning live from a developer gives a completely different result than watching online videos"
}, {
name: "teachers",
title: "Support",
text: "You will get personal advice and feedback on your code"
}, {
name: "result",
title: "Result",
text: "Those who you actively participate, solve tasks, become good developers"
}, {
name: "guarantee",
title: "Guarantee",
text: "Money back guarantee if something is wrong"
} ],
program: "Courses program, sign up for the courses",
opinions: "Opinions of professionals",
ongoing: "Sign up is ongoing",
teachers_title: "Teacher,Teachers,Teachers",
teachers_description: "The courses are held by experienced and qualified professionals only. Each teacher has both practical and theoretical knowledge gained during the years of working in the field of web development.\n",
phone_toggler: "Information about the teacher and courses features.",
faq: {
title: "Frequently asked questions",
another_question: 'Do you have another question? Ask it in the comments below or write me an email <a href="mailto:iliakan_40javascript.info">iliakan@javascript.info</a> (I check the mailbox regularly), and in an urgent cases you can &nbsp;call me +79035419441.'
},
learn_more: "Learn more",
guarantee: {
title: "Guarantees",
description: "All courses’ participants, regardless of sex, age, sexual and religious identity&hellip;",
subtitle: "Guaranty:",
reasons: [ "If you will not understand topics’ explanations", "If you will not obtain new skills and knowledge from the courses", "If you will not be able to connect online learning system" ],
result: "can get your money back.",
condition: "You just need to write me, specify the reason from the list, tell exactly what are you not satisfied with, prove your identity (to prove that the refund wasn’t demanded by a hacker) no later than the end of the course’s first week; after that your participation will be terminated and you will get your money back by any method convenient for you.\n"
},
participant_logos: {
title: "Our participants",
description: "We've been running workshops for professionals in the sphere of JavaScript since 2006, courses – since 2011. During this time, thousands of people from hundreds of companies have completed trainings, it’s hard to count them all. Particularly, employees of the following companies attended workshops and courses:\n",
notes: 'Hundreds of feedbacks on the trainings were posted, which now you can find <a href="../../../https@javascript.ru/course/afters">here</a> and <a href="../../../https@javascript.ru/course/afters">here</a>, you can read some of them on this page as well. You can find professionals’ opinion about the courses below.\n'
},
professionals: {
title: "Professionals’ opinion",
articles: [ {
userpic: "../../img/courses/dmitryx.jpg",
username: "Dmytro Poliakov",
linkedin_link: "../../../https@www.linkedin.com/in/dmitryx",
about: 'Frontend developer at <a href="../../../google.com">Google</a> who is developing <a href="../../../youtube.com">Youtube</a>, more than 15 years of total work experience as an architect and lead developer different projects.\n',
feedback: "I attended several workshops run by Ilya and learned a lot of useful information. I really like professional attitude, greatly organized representation and structuring of material, examples and patterns of application in development. I think Ilya is one of the best JS developers and teachers. I strongly advise these courses for everyone who wants to improve their knowledge and become a professional.\n"
}, {
userpic: "../../img/courses/andrewsumin.jpg",
username: "Andrew Sumin",
linkedin_link: "../../../https@ru.linkedin.com/in/andrewsumin",
about: 'Lead of frontend developers at <a href="../../../mail.ru">Mail.ru</a>, also took part in such projects as <a href="../../../hh.ru">hh.ru</a> and <a href="../../../yandex.ru">yandex.ru</a>.\n',
feedback: "Back in 2006, when I worked as a frontend developer at Yandex, I attended Ilya’s course. Even at the time his workshops were notable for strong background, detailed analysis of important and complex aspects and smart organizing. I would wholeheartedly recommend Ilya’s courses to everyone who wants to know everything about JavaScript.\n"
}, {
userpic: "../../img/courses/tyv.jpg",
username: "Yuri Tkachenko",
linkedin_link: "../../../https@ua.linkedin.com/in/tkachenkoyuri",
about: 'Frontend developer at <a href="../../../yandex.ru">Yandex</a>, has led one of the layout designers’ teams for 3, more than 10 years of total work experience in frontend development.\n',
feedback: "During my work as a lead of one of the layout designers’ teams at Yandex, I faced the task to organize advanced professional training of a big team of layout designers. After a thorough analysis, I chose the course of Ilya Kantor and was very happy with the result. I believe this course is the best one among the courses in Russian.\n"
} ]
}
};
},
131: function(e, t) {
e.exports = {
title: "Курсы Javascript",
description: "Здесь находятся «правильные» курсы по профессиональному Javascript, цель которых — научить думать на Javascript, писать просто, быстро и красиво.\n",
opened_courses: "Перейти к списку открытых курсов",
people_talk_about: "Что говорят о курсах люди",
features: [ {
name: "quality",
title: "Качество",
text: "Это самое главное. Мы изучаем разработку на профессиональном уровне"
}, {
name: "online",
onclick: "document.getElementById('online').checked = true",
title: "Дистанционность",
text: "На практике это оказывается удобнее, чем очные курсы"
}, {
name: "teachers",
title: "Поддержка",
text: "Вы получите советы по развитию именно для вас"
}, {
name: "result",
title: "Результат",
text: "Цель курсов - получить конкретные результаты в плане знаний и умений"
}, {
name: "guarantee",
title: "Гарантия",
text: "Возврат денег, если что-то не так"
} ],
program: "Программа курсов и запись",
opinions: "Мнение профессионалов",
ongoing: "Идёт набор в группы",
teachers_title: "Преподаватель,Преподаватели,Преподаватели",
teachers_description: "Курсы проводятся только опытными и проверенными профессионалами. Каждый преподаватель обладает как практическими, так и теоретическими знаниями, приобретёнными за годы работы в сфере веб-разработки.\n",
phone_toggler: "Информация о ведущем и особенностях курсов.",
learn_more: "Подробнее",
faq: {
title: "Часто задаваемые вопросы",
another_question: 'У вас другой вопрос? Напишите его в комментариях внизу этой страницы или мне на почту <a href="mailto:help_40javascript.ru">help@javascript.ru</a> (проверяется регулярно), а если совсем срочно&nbsp;— по телефону +7-903-5419441.',
old_comments: 'Почитать предыдущие комментарии к этой странице можно в <a href="../../../https@javascript.ru/courses">старом движке</a>.'
},
participant_logos: {
title: "У нас обучались",
description: "Мастер-классы для профессионалов в области JavaScript проводятся примерно с 2006 года, а курсы – с 2011 года. За это время обучились тысячи человек из сотен компаний, всех их перечислить сложно. В частности, проходили обучение сотрудники этих компаний:\n",
notes: "За время обучения были оставлены сотни отзывов, некоторые из которых вы можете видеть выше на этой странице, а также, в более подробном виде, на странице курса и в профилях преподавателей. Мнение о курсах профессионалов вы также можете увидеть выше.\n"
},
professionals: {
title: "Мнение профессионалов",
articles: [ {
userpic: "../../img/courses/dmitryx.jpg",
username: "Дмитрий Поляков",
linkedin_link: "../../../https@www.linkedin.com/in/dmitryx",
about: 'Frontend-разработчик в <a href="../../../google.com">Google</a>, делает <a href="../../../youtube.com">Youtube</a>, общий опыт работы архитектором и ведущим разработчиком различных проектов более 15 лет.\n',
feedback: "Участвовал в мастер-классах Ильи несколько раз, узнал много полезного. Очень нравится профессиональное и отлично организованное изложение и структуризация материала, приводимые примеры и паттерны применения в настоящей разработке. Считаю Илью одним из лучших JS разработчиков и ведущих. Крайне рекомендую курсы для тех, кто хочет отточить свои знания и стать профессионалом.\n"
}, {
userpic: "../../img/courses/andrewsumin.jpg",
username: "Андрей Сумин",
linkedin_link: "../../../https@ru.linkedin.com/in/andrewsumin",
about: 'Главный по Frontend в компании <a href="../../../mail.ru">Mail.ru</a>, также принимал участие в таких проектах как <a href="../../../hh.ru">hh.ru</a> и <a href="../../../yandex.ru">yandex.ru</a>.\n',
feedback: "В далёком 2006 году, будучи frontend-разработчиком в Яндекс, я посетил курс Ильи. Уже тогда его занятия отличались сильной базой, подробным разбором важных и сложных аспектов и грамотной организацией. Я искренне рекомендую курсы Ильи всем кто хочет знать всё о языке JavaScript.\n"
}, {
userpic: "../../img/courses/tyv.jpg",
username: "Юрий Ткаченко",
linkedin_link: "../../../https@ua.linkedin.com/in/tkachenkoyuri",
about: 'Frontend-разработчик, в <a href="../../../yandex.ru">Яндекс</a> 3 года руководил одной из команд верстальщиков, общий опыт Frontend-разработки более 10 лет .\n',
feedback: "Во время работы руководителем одной из групп верстки в Яндексе передо мной встала задача повышения квалификации большой команды верстальщиков. После длительного анализа я выбрал курс Ильи Кантора и остался очень доволен результатом, считаю этот курс лучшим из существующих на русском языке.\n"
} ]
}
};
},
132: function(e, t) {
e.exports = {
dropbox_share: {
enter_email: "Please enter email address of your Dropbox account below. You will receive an invitation (beta feature).\n",
by_default: "Your email on this website is entered in the field by default, but if you use Dropbox account under another email, you can change it.\n",
request_access: "Request access to the directory"
},
materials: {
notify_me: "Notify me by email when new materials are posted.",
title: "Add materials",
filename: "File name, by lesson time:&nbsp;&nbsp;",
comment: "Comment (optional)",
notifications: "Send notifications",
submit: "Add",
serial_number: "Video serial number:",
name: "Name",
size: "Size",
added_date: "Added on",
no_materials: "There are no materials yet, they will be available later.",
chat_logs: "Chat logs"
},
slack_logs: {
title: "Group chat logs"
}
};
},
133: function(e, t) {
e.exports = {
dropbox_share: {
enter_email: "Введите ниже email, с которым вы зарегистрированы на Dropbox. Вам придёт инвайт (функциональность в бете).\n",
by_default: '"По умолчанию" в поле введён ваш email на этом сайте, но, если вы уже используете Dropbox с другим email, то можете его поменять.\n',
request_access: "Запросить доступ к каталогу",
no_dropbox: "У этой группы не включён Dropbox",
success: "Готово, проверьте, в Dropbox должен быть инвайт. Он также придёт на email."
},
materials: {
notify_me: "Уведомлять меня по email о появлении материалов.",
title: "Добавление материалов",
filename: "Имя файла, по времени занятия:&nbsp;&nbsp;",
comment: "Комментарий (опционально)",
notifications: "Рассылать уведомления",
submit: "Добавить",
serial_number: "Серийный номер для видео:",
name: "Название",
size: "Размер",
added_date: "Добавлено",
no_materials: "Материалов пока нет, будут доступны позже.",
chat_logs: "Логи чата"
},
slack_logs: {
title: "Логи группового чата"
}
};
},
134: function(e, t) {
e.exports = {
course_feedback: {
missing_score: "Score is missing.",
missing_text: "Feedback text is missing.",
missing_country: "Country is not specified."
},
course_group: {
invalid_timeStart: "Invalid time of start",
invalid_timeEnd: "Invalid time of end"
},
course_participant: {
missing_name: "Name is missing.",
invalid_name: "Name shall consist of one word.",
missing_surname: "Surname is missing.",
invalid_surname: "Surname shall consist of one word.",
missing_country: "Country is not specified.",
invalid_url: "Invalid page URL."
}
};
},
135: function(e, t) {
e.exports = {
course_feedback: {
missing_score: "Не стоит оценка.",
missing_text: "Отсутствует текст отзыва.",
missing_country: "Страна не указана."
},
course_group: {
invalid_timeStart: "Некорректное время начала",
invalid_timeEnd: "Некорректное время конца"
},
course_participant: {
missing_name: "Имя отсутствует.",
invalid_name: "Имя дожно состоять из одного слова.",
missing_surname: "Фамилия отсутствует.",
invalid_surname: "Фамилия должна состоять из одного слова.",
missing_country: "Страна не указана.",
invalid_url: "Некорректный URL страницы."
}
};
},
136: function(e, t) {
e.exports = {
feedback: "Отзыв о курсе\n #{title}",
by_user: {
title: "Описание курса",
info: "Инструкции по настройке окружения",
slack_logs: "Логи slack чата",
jb: "Скидка на редакторы Jetbrains",
ical: "Расписание в формате iCal",
materials: "Материалы для обучения",
participants: "Анкеты участников",
participants_json: "JSON участников (для CORS)"
},
group_feedback_list: {
plural_feedback: "отзыв,отзыва,отзывов"
},
group_feedback_edit: {
no_participant: "Оставлять отзыв могут только участники группы.",
no_rights: "Не хватает прав",
title: "Отзыв",
public_feedback: "Ваш отзыв успешно сохранен. При желании, вы можете поделиться им в соц сетях.",
private_feedback: "Ваш отзыв успешно сохранен. Он будет виден только нам.",
rate_course: "Поставьте, пожалуйста, курсу оценку.",
missing_feedback_text: "Вы забыли написать текст отзыва."
},
group_feedback_show: {
private_feedback: "Отзыв не публичный",
title: "Отзыв",
head_title: "Отзыв на",
comment_saved: "Комментарий сохранён",
comment_save_error: "Не получилось сохранить комментарий",
edit: "редактировать"
},
group_finish: "Группа #{title} успешно завершена.",
group_materials: {
title: "Материалы для обучения",
added_with_notifications: "Материал добавлен, уведомления разосланы.",
added_wo_notifications: "Материал добавлен, уведомления НЕ рассылались.",
email_subject: "Добавлены материалы курса",
remove_file: "Удалить файл",
file_removed: "Файл удалён.",
settings_saved: "Настройка сохранена."
},
group_materials_download: {
invalid_link: "Ссылка неверна. Возможно, этот материал был добавлен по ошибке и позже удалён из преподавателем."
},
group_slack_invite: {
no_target: "Не участник и не преподаватель",
no_slack_user: 'Этот пользователь не зарегистрирован в Slack. Сначала зарегистрируйтесь на <a href="#{slack_url}">#{slack_url}</a> с email #{email}.',
user_added: "Пользователь #{email} добавлен в slack-канал #{groupSlug}."
},
participants: {
data_updated: "Данные обновлены.",
fix_errors: "Исправьте, пожалуйста, ошибки."
},
invite: {
order: "Заказ #{order}",
success: "Поздравляем, вы присоединились к курсу. Ниже, рядом с курсом, вы найдёте инструкцию.",
already_accepted_title: "Это приглашение уже принято",
already_accepted: "Это приглашение уже принято. Зайдите в учётную запись участника для доступа к курсу.",
outdated_link_title: "Ссылка устарела",
outdated_link: 'Извините, ссылка по которой вы перешли, устарела. Если у вас возникли какие-либо вопросы – пишите на <a href="mailto:#{email}">#{email}</a>',
already_added: "Вы уже участник курса. Ниже, рядом с курсом, вы найдёте инструкцию.",
choose_country: " выберите страну ",
form_title: "Анкета участника"
},
signup: {
title: "Заказ № #{order}",
amount: "Стоимость",
no_such_group: "Нет такой группы.",
signup_finished_title: "Запись в эту группу завершена",
signup: "Запись на курс",
signup_finished: 'Запись в эту группу завершена. Перейдите на <a href="/courses/#{slug}">страницу курса</a>, чтобы увидеть открытые группы.',
signup_title: "Регистрация\n #{title}",
tutorial: "Учебник",
courses: "Курсы",
choose_group: "Выберите, пожалуйста, группу.",
plural_human: "человека,человек,человек",
receiptTitle: "Участие в курсе для #{count} #{people}",
email_subject: "Заказ #{order}",
payment_failed: "Оплата не прошла, попробуйте ещё раз.",
questions: 'По вопросам, касающимся оплаты, пишите на <a href="mailto:#{ordersMail}">#{ordersMail}</a>.',
contact_info: "Контактная информация:",
payment: "Оплата:",
payment_succeed: "Осуществлена успешно",
payment_pending: "Ожидается подтверждение",
thanks_for_order: "Спасибо за заказ!",
confirmation: "В ближайшее время вам придёт уведомление на адрес #{email}",
click_to_join_group: 'Перейдите в раздел <a href="#{url}/courses">Курсы</a> вашей учетной записи, чтобы присоединиться к группе.',
edit_participants: 'Отредактировать данные других участников можно в разделе <a href="#{url}/orders">Заказы</a> учетной записи. Им также придёт приглашение.',
questions_after: 'Если у вас возникли какие-либо вопросы, присылайте их на <a href="#{email}">#{email}</a>.',
teacher: "Ведущий",
seats_pluralize: "место,места,мест",
seats_left: "Осталось #{seats} #{seats_pluralized}",
seats_limited: "Количество мест ограничено",
signup_button: "Записаться",
subscribe: "Подписаться",
subscribe_other: [ "Вы также можете", "подписаться", "на уведомления о наборе новых групп по этой программе" ],
confirmation_email: "На ваш email придёт письмо с информацией о дате и деталях программы.",
this_course: "Этот курс",
conducted_plural: "ведут:",
conducted_single: "ведёт:"
},
feedback_loader: {
no_feedback: "Отзывов пока нет."
},
photo_load_widget: {
wrong_format: "Неверный тип файла или изображение повреждено."
},
participant_item: {
participant: "Участник",
invalid_email: "введите корректный email"
},
comment_form: {
submit: "Опубликовать",
cancel: "Отмена"
},
admin: {
no_such_order: "Нет такого заказа.",
no_such_group: "Нет такого заказа на курс",
no_such_file: "Нет такого файла",
transfer_participant: "Вы переведены в группу #{title}",
transfer_succeed_notified: "Перевод завершён, уведомление отослано.",
transfer_succeed_not_notified: "Перевод завершён, уведомление НЕ отсылалось.",
participant_deducted: "Участник отчислен: #{email}",
document_uploaded: "Администратор загрузил документы к заказу #{order}"
},
course: {
code_discount: "Скидка предоставлена по коду."
},
patch: {
information_updated_notified: "Информация обновлена, приглашения высланы на адреса: #{emails}.",
information_updated_not_notified: "Информация об участниках обновлена."
},
chat_logs: {
title: "Логи группового чата",
timeframe_from: "Временной диапазон c",
timeframe_to: "по",
apply: "Применить"
},
contacts: {
title: "Контактная информация",
note: "Оставьте ваши контактные данные, чтобы мы могли связаться с вами в случае необходимости",
name_surname: "Имя и Фамилия:",
phone: "Телефон:",
data_secured: "Ваши данные в безопасности",
personal_info: "Никакие ваши личные данные не будут переданы третьим лицам, кроме как по вашему желанию или для целей выполнения заключенного с вами договора.",
save_and_continue: "Сохранить и продолжить"
},
grayed_list: {
contact_info: "Контактная информация",
payment: "Оплата",
confirmation: "Подтверждение"
},
participant_register: {
title: "Места и участники",
participants_count: "Количество мест",
only_one_place: "есть только 1 место, извините",
enter_count: "введите значение от 1 до #{max}",
already_participant: "Я являюсь участником",
no: "НЕТ",
yes: "ДА",
amount: "Стоимость",
add_participants: "Указать участников",
add_later: "(это можно сделать позже)",
save_and_continue: "Сохранить и продолжить"
},
payment: {
title: "Оплата",
do_not_pay_twice: "Не оплачивайте дважды. Меняйте метод оплаты лишь если уверены, что оплата не произошла.",
terms_accept: 'Регистрируясь на курсы, вы соглашаетесь с <a href="../offer.ru.pdf" target="_blank">договором оферты</a>.',
questions: 'Если у вас возникли какие-либо вопросы, присылайте их на <a href="#{ordersMail}">#{ordersMail}</a>.',
goto_payment: "Перейти к оплате"
},
participant_info: {
country: "Страна",
city: "Город",
about_link: "Ссылка на профиль",
occupation: "Область работы",
purpose: "С какой целью записались на курс?",
wishes: "Ваши пожелания по курсу"
},
guarantee: {
title: "Гарантия",
description: '<ul>\n  <li>Если объяснения будут вам непонятны</li>\n  <li>Если курсы не дадут вам новых знаний и умений</li>\n  <li>Если вы не сможете подключиться к системе онлайн-обучения</li>\n</ul> <p>…то вы сможете получить деньги назад.</p>\n<p>Для этого достаточно не позже окончания первой недели курса <a href="mailto:help_40javascript.ru">написать</a>, указав причину из этого списка и что именно вас не устраивает, и тогда ваше участие будет прекращено, а вы получите деньги обратно, удобным для вас способом.</p>\n'
},
additional_information: "Дополнительная информация",
back_to_all: "Все курсы",
create_order: {
recording_finished: "Запись в эту группу завершена, извините.",
no_seats: "Извините, в этой группе уже нет мест.",
seats_limit: "Извините, уже нет такого количества мест. Уменьшите количество участников до #{max}.",
no_contact_person: "Не указано контактное лицо.",
no_participants: "Отсутствуют участники.",
not_authorized: "Вы не авторизованы.",
title_check_prefix: "Оплата за обучение на курсе:"
},
invite_email_subject: "Приглашение на курс, в группу #{group}",
invite_remind_email_subject: "#{group} – вы не присоединились к группе",
request_notification: "Вы можете запросить уведомление:"
};
},
137: function(e, t) {
e.exports = {
group_start_soon: "Group will start soon: #{title}",
reminder: "Reminder #{title}",
no_such_course: "No such course",
not_a_teacher: "You are not a host of selected course",
days: [ "", "mon", "tue", "wed", "thu", "fri", "sat", "sun" ],
group_exists: "Group #{slug} exists already"
};
},
138: function(e, t) {
e.exports = {
group_start_soon: "Скоро группа: #{title}",
reminder: "Напоминание #{title}",
no_such_course: "Нет такого курса",
not_a_teacher: "Вы не ведёте данный курс",
days: [ "", "пн", "вт", "ср", "чт", "пт", "сб", "вс" ],
group_exists: "Группа #{slug} уже существует"
};
},
147: function(e, t, a) {
"use strict";
var n = a(146), i = a(148);
const o = a(143).lang, r = a(144);
r.requirePhrase("site", a(1)("./" + o + ".yml")), document.addEventListener("xhrfail", function(e) {
new n.Error(e.reason);
}), e.exports = function(e) {
var t = new XMLHttpRequest(), a = e.method || "GET", n = e.body, o = e.url;
t.open(a, o, !e.sync), t.method = a;
var s = i();
s && !e.skipCsrf && t.setRequestHeader("X-XSRF-TOKEN", s), "[object Object]" == {}.toString.call(n) && (t.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), 
n = JSON.stringify(n)), e.noDocumentEvents || (t.addEventListener("loadstart", e => {
t.timeStart = Date.now();
var a = d("xhrstart", e);
document.dispatchEvent(a);
}), t.addEventListener("loadend", e => {
var t = d("xhrend", e);
document.dispatchEvent(t);
}), t.addEventListener("success", e => {
var t = d("xhrsuccess", e);
t.result = e.result, document.dispatchEvent(t);
}), t.addEventListener("fail", e => {
var t = d("xhrfail", e);
t.reason = e.reason, document.dispatchEvent(t);
})), e.raw || t.setRequestHeader("Accept", "application/json"), t.setRequestHeader("X-Requested-With", "XMLHttpRequest");
var c, l, u = e.normalStatuses || [ 200 ];
function d(e, t) {
var a = new CustomEvent(e);
return a.originalEvent = t, a;
}
function p(e, a) {
var n = d("fail", a);
n.reason = e, t.dispatchEvent(n);
}
return t.addEventListener("error", e => {
p(r("site.errors.server_connection_error"), e);
}), t.addEventListener("timeout", e => {
p(r("site.errors.server_request_timeout"), e);
}), t.addEventListener("abort", e => {
p(r("site.errors.request_aborted"), e);
}), t.addEventListener("load", a => {
if (t.status) if (-1 != u.indexOf(t.status)) {
var n = t.responseText;
if ((t.getResponseHeader("Content-Type") || "").match(/^application\/json/) || e.json) try {
n = JSON.parse(n);
} catch (a) {
return void p(r("site.errors.invalid_format"), a);
}
n = n, (a = d("success", a)).result = n, t.dispatchEvent(a);
} else p(r("site.errors.server_error", {
status: t.status
}), a); else p(r("site.errors.no_response"), a);
}), setTimeout(function() {
t.send(n);
}, 0), t;
};
},
148: function(e, t, a) {
"use strict";
e.exports = function() {
var e = document.cookie.match(/XSRF-TOKEN=([\w-]+)/);
return e ? e[1] : null;
};
},
149: function(e, t, a) {
"use strict";
function n(e) {
return null != e && "" !== e;
}
function i(e) {
return (Array.isArray(e) ? e.map(i) : e && "object" == typeof e ? Object.keys(e).filter(function(t) {
return e[t];
}) : [ e ]).filter(n).join(" ");
}
t.merge = function e(t, a) {
if (1 === arguments.length) {
for (var i = t[0], o = 1; o < t.length; o++) i = e(i, t[o]);
return i;
}
var r = t.class, s = a.class;
for (var c in (r || s) && (r = r || [], s = s || [], Array.isArray(r) || (r = [ r ]), 
Array.isArray(s) || (s = [ s ]), t.class = r.concat(s).filter(n)), a) "class" != c && (t[c] = a[c]);
return t;
}, t.joinClasses = i, t.cls = function(e, a) {
for (var n = [], o = 0; o < e.length; o++) a && a[o] ? n.push(t.escape(i([ e[o] ]))) : n.push(i(e[o]));
var r = i(n);
return r.length ? ' class="' + r + '"' : "";
}, t.style = function(e) {
return e && "object" == typeof e ? Object.keys(e).map(function(t) {
return t + ":" + e[t];
}).join(";") : e;
}, t.attr = function(e, a, n, i) {
return "style" === e && (a = t.style(a)), "boolean" == typeof a || null == a ? a ? " " + (i ? e : e + '="' + e + '"') : "" : 0 == e.indexOf("data") && "string" != typeof a ? (JSON.stringify(a).indexOf("&"), 
a && a.toISOString, " " + e + "='" + JSON.stringify(a).replace(/'/g, "&apos;") + "'") : n ? (a && a.toISOString, 
" " + e + '="' + t.escape(a) + '"') : (a && a.toISOString, " " + e + '="' + a + '"');
}, t.attrs = function(e, a) {
var n = [], o = Object.keys(e);
if (o.length) for (var r = 0; r < o.length; ++r) {
var s = o[r], c = e[s];
"class" == s ? (c = i(c)) && n.push(" " + s + '="' + c + '"') : n.push(t.attr(s, c, !1, a));
}
return n.join("");
};
var o = {
"&": "&amp;",
"<": "&lt;",
">": "&gt;",
'"': "&quot;"
}, r = /[&<>"]/g;
function s(e) {
return o[e] || e;
}
t.escape = function(e) {
var t = String(e).replace(r, s);
return t === "" + e ? e : t;
}, t.rethrow = function e(t, n, i, o) {
if (!(t instanceof Error)) throw t;
if (!("undefined" == typeof window && n || o)) throw t.message += " on line " + i, 
t;
try {
o = o || a(77).readFileSync(n, "utf8");
} catch (a) {
e(t, null, i);
}
var r = 3, s = o.split("\n"), c = Math.max(i - r, 0), l = Math.min(s.length, i + r);
r = s.slice(c, l).map(function(e, t) {
var a = t + c + 1;
return (a == i ? "  > " : "    ") + a + "| " + e;
}).join("\n");
throw t.path = n, t.message = (n || "Jade") + ":" + i + "\n" + r + "\n\n" + t.message, 
t;
}, t.DebugItem = function(e, t) {
this.lineno = e, this.filename = t;
};
},
151: function(e, t, a) {
"use strict";
t.thumb = function(e, t, a) {
if (!e) return e;
var n = window.devicePixelRatio;
a *= n;
var i = (t *= n) <= 160 && a <= 160 ? "t" : t <= 320 && a <= 320 ? "m" : t <= 640 && a <= 640 ? "i" : t <= 1024 && a <= 1024 ? "h" : "";
return e.slice(0, e.lastIndexOf(".")) + i + e.slice(e.lastIndexOf("."));
};
},
152: function(e, t, a) {
"use strict";
const n = a(153)(), i = a(151).thumb, o = a(143).lang, r = a(144);
e.exports = function(e, t) {
return function(e) {
e.bem = n, e.t = r, e.thumb = i, e.lang = o;
}(t = t ? Object.create(t) : {}), e(t);
};
},
153: function(e, t, a) {
"use strict";
var n = a(149);
e.exports = function(e) {
return (e = e || {}).prefix = e.prefix || "", e.element = e.element || "__", e.modifier = e.modifier || "_", 
function(t, a, i, o) {
var r = this.block, s = this.attributes || {};
if (!s.class && i && !o) throw new Error("Block without class: " + i);
if (s.class) {
var c, l = s.class;
l instanceof Array && (l = l.join(" ")), l = l.split(" ");
try {
c = l[0].match(new RegExp("^(((?!" + e.element + "|" + e.modifier + ").)+)"))[1];
} catch (e) {
throw new Error("Incorrect bem class: " + l[0]);
}
o ? l[0] = a[a.length - 1] + e.element + l[0] : a[a.length] = c;
var u = (o ? a[a.length - 1] + e.element : "") + c;
-1 === l.indexOf(u) && (l[l.length] = u);
for (var d = 0; d < l.length; d++) {
var p = l[d];
p.match(new RegExp("^(?!" + e.element + ")" + e.modifier)) ? l[d] = u + p : p.match(new RegExp("^" + e.element)) && (a[a.length - 2] ? l[d] = a[a.length - 2] + p : l[d] = a[a.length - 1] + p), 
l[d].match(new RegExp("^" + u + "($|(?=" + e.element + "|" + e.modifier + "))")) && (l[d] = e.prefix + l[d]);
}
s.class = l.sort().join(" ");
}
!function(e, t, a, i, o) {
var r = o || "div";
switch (r) {
case "img":
a.alt && !a.title && (a.title = ""), a.title && !a.alt && (a.alt = a.title), a.alt || (a.alt = "");
break;

case "input":
a.type || (a.type = "text");
break;

case "html":
e.push("<!DOCTYPE HTML>");
break;

case "a":
a.href || (a.href = "#");
}
e.push("<" + r + n.attrs(n.merge([ a ]), !0) + ">"), t && t();
-1 == [ "area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "menuitem", "meta", "param", "source", "track", "wbr" ].indexOf(r) && e.push("</" + r + ">");
}(t, r, s, 0, i), o || a.pop();
};
};
},
174: function(e, a, n) {
var i = n(149);
e.exports = function(e) {
var a, n = [], o = {}, r = e || {};
return function(e, t, r, s) {
n.push(""), t || (t = []), o.b = a = function(a, i, o) {
this && this.block, this && this.attributes;
e.call(this, n, t, a, i, o);
}, o.e = a = function(e) {
var t = this && this.block, a = this && this.attributes || {};
o.b.call({
block: function() {
t && t();
},
attributes: i.merge([ a ])
}, e, !0);
}, o.b.call({
block: function() {
o.b.call({
block: function() {
n.push(i.escape(null == (a = s) ? "" : a));
},
attributes: {
name: "teacherComment",
class: "textarea-input"
}
}, "textarea"), o.e.call({
block: function() {
o.b.call({
block: function() {
o.e.call({
block: function() {
n.push(i.escape(null == (a = r("courses.comment_form.submit")) ? "" : a));
},
attributes: {
class: "text"
}
}, "span");
},
attributes: {
type: "submit",
class: "button _action __item-save"
}
}, "button"), o.e.call({
block: function() {
n.push(i.escape(null == (a = r("courses.comment_form.cancel")) ? "" : a));
},
attributes: {
type: "button",
"data-action-comment-cancel": !0,
class: "item-cancel"
}
}, "button");
},
attributes: {
class: "ok-cancel"
}
});
},
attributes: {
class: "course-feedback-comment-form"
}
}, "form");
}.call(this, "bem" in r ? r.bem : "undefined" != typeof bem ? bem : void 0, "bem_chain" in r ? r.bem_chain : "undefined" != typeof bem_chain ? bem_chain : void 0, "t" in r ? r.t : "undefined" != typeof t ? t : void 0, "teacherCommentRaw" in r ? r.teacherCommentRaw : "undefined" != typeof teacherCommentRaw ? teacherCommentRaw : void 0), 
n.join("");
};
},
311: function(e, t, a) {
"use strict";
var n = a(147), i = a(150), o = a(154), r = a(146), s = a(152), c = a(174);
const l = a(144), u = a(143).lang;
l.requirePhrase("courses", a(123)("./" + u + ".yml"));
class d {
constructor() {
this.elem = document, this.delegate("[data-action-coursefeedback-comment-add]", "click", e => {
e.preventDefault(), this.getItem(e.target).addComment();
}), this.delegate("[data-action-coursefeedback-comment-edit]", "click", e => {
e.preventDefault(), this.getItem(e.target).editComment();
});
}
getItem(e) {
return (e = e.closest(".course-feedback")).feedbackItem || (e.feedbackItem = new p(e)), 
e.feedbackItem;
}
}
o.delegateMixin(d.prototype);
class p {
constructor(e) {
this.elem = e, this.number = +e.getAttribute("data-coursefeedback-number");
var t = this.elem.querySelector("[data-coursefeedback-comment-raw]");
this.teacherCommentRaw = t ? t.innerHTML.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/, "&") : "", 
this.delegate(".course-feedback-comment-form", "submit", e => {
e.preventDefault(), this.onSubmitComment();
}), this.delegate("[data-action-comment-cancel]", "click", e => {
e.preventDefault(), this.onCancelComment();
});
}
addComment() {
this.renderCommentForm();
}
editComment() {
this.renderCommentForm();
}
renderCommentForm() {
var e = this.elem.querySelector(".course-feedback__teacher-comment");
e ? this.teacherComment = e.firstChild.innerHTML : (this.teacherComment = "", (e = document.createElement("div")).className = "course-feedback__teacher-comment", 
this.elem.querySelector(".course-feedback__teacher").appendChild(e)), e.innerHTML = s(c, {
teacherCommentRaw: this.teacherCommentRaw
}), e.querySelector("textarea").focus();
}
onCancelComment() {
this.renderComment();
}
onSubmitComment() {
var e = this.elem.querySelector("form"), t = e.elements.teacherComment.value.trim();
const a = n({
method: "PATCH",
url: "comment",
body: {
number: this.number,
teacherComment: t
}
});
var o = e.querySelector('[type="submit"]'), s = new i({
elem: o,
size: "small",
elemClass: "button_loading"
});
s.start(), o.disabled = !0, a.addEventListener("loadend", e => {
s.stop(), o.disabled = !1;
}), a.addEventListener("success", e => {
200 == a.status ? (new r.Success(l("courses.group_feedback_show.comment_saved")), 
this.teacherCommentRaw = t, this.teacherComment = e.result.teacherComment, this.renderComment()) : new r.Error(l("courses.group_feedback_show.comment_save_error"));
});
}
renderComment() {
var e = this.elem.querySelector(".course-feedback__teacher-comment");
if (!this.teacherComment) return e && e.remove(), void (this.elem.querySelector("[data-action-coursefeedback-comment-add]").style.display = "");
this.elem.querySelector("[data-action-coursefeedback-comment-add]").style.display = "none", 
e.innerHTML = `<div></div>\n          <a class="course-feedback__edit" href='#' data-action-coursefeedback-comment-edit>${l("courses.group_feedback_show.edit")}</a>\n          `, 
e.firstChild.innerHTML = this.teacherComment;
}
}
o.delegateMixin(p.prototype), new d();
},
77: function(e, t) {}
}, [ 311 ]);