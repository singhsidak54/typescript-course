enum First {
    no, // 0
    yes, // 1
    maybe // 2
}

enum Second {
    no = 2, // 2
    yes, // 3
    maybe // 4
}

enum Third {
    no = 2,
    yes = 10,
    maybe = 100
}

enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED
};

const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus): boolean {
    return status === OrderStatus.DELIVERED;
}