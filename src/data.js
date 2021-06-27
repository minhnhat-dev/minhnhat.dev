import faker from "faker";

const feature = [
    {
        id: faker.random.uuid(),
        title: "NodeJS",
        photoUrl: "logo/nodejs.png"
    },
    {
        id: faker.random.uuid(),
        title: "Docker",
        photoUrl: "logo/docker.png"
    },
    {
        id: faker.random.uuid(),
        title: "MongoDB",
        photoUrl: "logo/mongodb-hd.jpeg"
    },
    {
        id: faker.random.uuid(),
        title: "HTML, CSS, JS",
        photoUrl: "logo/html.png"
    },
    {
        id: faker.random.uuid(),
        title: "ReactJs",
        photoUrl: "logo/reactjs.png"
    },
    {
        id: faker.random.uuid(),
        title: "Redux",
        photoUrl: "logo/redux.jpeg"
    },
    {
        id: faker.random.uuid(),
        title: "Redis",
        photoUrl: "logo/redis-hd.png"
    },
    {
        id: faker.random.uuid(),
        title: "REST API",
        photoUrl: "logo/resfullapi-hd.png"
    },
    {
        id: faker.random.uuid(),
        title: "GraphQL",
        photoUrl: "logo/graphql.png"
    },
    {
        id: faker.random.uuid(),
        title: "Apollo Server",
        photoUrl: "logo/apollo-server-graphql.png"
    },
    {
        id: faker.random.uuid(),
        title: "Grpc",
        photoUrl: "logo/grpc-hd.png"
    },
    {
        id: faker.random.uuid(),
        title: "Socket IO",
        photoUrl: "logo/socketio.png"
    },
    {
        id: faker.random.uuid(),
        title: "AWS",
        photoUrl: "logo/aws.png"
    },
    {
        id: faker.random.uuid(),
        title: "Jenkins",
        photoUrl: "logo/jenkins.png"
    },
    {
        id: faker.random.uuid(),
        title: "Kubernetes",
        photoUrl: "logo/kubernetes.png"
    },
    {
        id: faker.random.uuid(),
        title: "RabbitMQ",
        photoUrl: "logo/rabit.png"
    }
];

const webApp = [
    {
        id: faker.random.uuid(),
        title: "Hay nói đạo lý",
        photoUrl: `https://picsum.photos/id/${Math.trunc(Math.random() * 100)}/300/300`,
        content: faker.lorem.words()
    },
    {
        id: faker.random.uuid(),
        title: "Hay nói đạo lý",
        photoUrl: `https://picsum.photos/id/${Math.trunc(Math.random() * 100)}/300/300`,
        content: faker.lorem.words()
    },
    {
        id: faker.random.uuid(),
        title: "Hay nói đạo lý",
        photoUrl: `https://picsum.photos/id/${Math.trunc(Math.random() * 100)}/300/300`,
        content: faker.lorem.words()
    },
    {
        id: faker.random.uuid(),
        title: "Hay nói đạo lý",
        photoUrl: `https://picsum.photos/id/${Math.trunc(Math.random() * 100)}/300/300`,
        content: faker.lorem.words()
    },
    {
        id: faker.random.uuid(),
        title: "Hay nói đạo lý",
        photoUrl: `https://picsum.photos/id/${Math.trunc(Math.random() * 100)}/300/300`,
        content: faker.lorem.words()
    },
    {
        id: faker.random.uuid(),
        title: "Hay nói đạo lý",
        photoUrl: `https://picsum.photos/id/${Math.trunc(Math.random() * 100)}/300/300`,
        content: faker.lorem.words()
    }
];

const mobileApp = [
    {
        id: faker.random.uuid(),
        title: "Hay nói đạo lý",
        photoUrl: `https://picsum.photos/id/${Math.trunc(Math.random() * 100)}/300/300`,
        content: faker.lorem.words()
    },
    {
        id: faker.random.uuid(),
        title: "Hay nói đạo lý",
        photoUrl: `https://picsum.photos/id/${Math.trunc(Math.random() * 100)}/300/300`,
        content: faker.lorem.words()
    },
    {
        id: faker.random.uuid(),
        title: "Hay nói đạo lý",
        photoUrl: `https://picsum.photos/id/${Math.trunc(Math.random() * 100)}/300/300`,
        content: faker.lorem.words()
    },
    {
        id: faker.random.uuid(),
        title: "Hay nói đạo lý",
        photoUrl: `https://picsum.photos/id/${Math.trunc(Math.random() * 100)}/300/300`,
        content: faker.lorem.words()
    },
    {
        id: faker.random.uuid(),
        title: "Hay nói đạo lý",
        photoUrl: `https://picsum.photos/id/${Math.trunc(Math.random() * 100)}/300/300`,
        content: faker.lorem.words()
    },
    {
        id: faker.random.uuid(),
        title: "Hay nói đạo lý",
        photoUrl: `https://picsum.photos/id/${Math.trunc(Math.random() * 100)}/300/300`,
        content: faker.lorem.words()
    }
];

const design = [
    {
        id: faker.random.uuid(),
        title: "Hay nói đạo lý",
        photoUrl: `https://picsum.photos/id/${Math.trunc(Math.random() * 100)}/300/300`,
        content: faker.lorem.words()
    },
    {
        id: faker.random.uuid(),
        title: "Hay nói đạo lý",
        photoUrl: `https://picsum.photos/id/${Math.trunc(Math.random() * 100)}/300/300`,
        content: faker.lorem.words()
    },
    {
        id: faker.random.uuid(),
        title: "Hay nói đạo lý",
        photoUrl: `https://picsum.photos/id/${Math.trunc(Math.random() * 100)}/300/300`,
        content: faker.lorem.words()
    },
    {
        id: faker.random.uuid(),
        title: "Hay nói đạo lý",
        photoUrl: `https://picsum.photos/id/${Math.trunc(Math.random() * 100)}/300/300`,
        content: faker.lorem.words()
    },
    {
        id: faker.random.uuid(),
        title: "Hay nói đạo lý",
        photoUrl: `https://picsum.photos/id/${Math.trunc(Math.random() * 100)}/300/300`,
        content: faker.lorem.words()
    },
    {
        id: faker.random.uuid(),
        title: "Hay nói đạo lý",
        photoUrl: `https://picsum.photos/id/${Math.trunc(Math.random() * 100)}/300/300`,
        content: faker.lorem.words()
    }
];

const content = [
    {
        id: faker.random.uuid(),
        title: "Hay nói đạo lý",
        photoUrl: `https://picsum.photos/id/${Math.trunc(Math.random() * 100)}/300/300`,
        content: faker.lorem.words()
    },
    {
        id: faker.random.uuid(),
        title: "Hay nói đạo lý",
        photoUrl: `https://picsum.photos/id/${Math.trunc(Math.random() * 100)}/300/300`,
        content: faker.lorem.words()
    },
    {
        id: faker.random.uuid(),
        title: "Hay nói đạo lý",
        photoUrl: `https://picsum.photos/id/${Math.trunc(Math.random() * 100)}/300/300`,
        content: faker.lorem.words()
    },
    {
        id: faker.random.uuid(),
        title: "Hay nói đạo lý",
        photoUrl: `https://picsum.photos/id/${Math.trunc(Math.random() * 100)}/300/300`,
        content: faker.lorem.words()
    },
    {
        id: faker.random.uuid(),
        title: "Hay nói đạo lý",
        photoUrl: `https://picsum.photos/id/${Math.trunc(Math.random() * 100)}/300/300`,
        content: faker.lorem.words()
    },
    {
        id: faker.random.uuid(),
        title: "Hay nói đạo lý",
        photoUrl: `https://picsum.photos/id/${Math.trunc(Math.random() * 100)}/300/300`,
        content: faker.lorem.words()
    }
];

export default {
    "#feature": feature,
    "#web_app": webApp,
    "#mobile_app": mobileApp,
    "#design": design,
    "#content": content
};
